/**
 * Daily SEO optimization script
 *
 * Runs via GitHub Actions every weekday at 6am UTC.
 * 1. Fetches daily trending searches from Google Trends (Spain)
 * 2. Fetches latest newsletter from Beehiiv RSS
 * 3. Uses Claude API to generate an optimized meta description
 * 4. Updates seo/config.json — Next.js reads this at build time
 *
 * Cloudflare Pages detects the commit and rebuilds automatically.
 */

import Anthropic from '@anthropic-ai/sdk'
import { XMLParser } from 'fast-xml-parser'
import { readFileSync, writeFileSync } from 'fs'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const require = createRequire(import.meta.url)
const googleTrends = require('google-trends-api')

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONFIG_PATH = join(ROOT, 'seo', 'config.json')

// Lowercase keywords that indicate a trend is locally relevant
const LOCAL_SIGNALS = [
  'alcalá', 'alcala', 'torrejón', 'torrejon', 'coslada', 'henares',
  'san fernando', 'azuqueca', 'guadalajara', 'corredor', 'ayuntamiento',
  'comunidad de madrid', 'madrid este',
]

async function getDailyTrends() {
  try {
    const raw = await googleTrends.dailyTrends({ geo: 'ES', hl: 'es' })
    const data = JSON.parse(raw)
    const searches = data?.default?.trendingSearchesDays?.[0]?.trendingSearches ?? []
    return searches.slice(0, 15).map(s => String(s.title.query))
  } catch (e) {
    console.warn('[trends] Google Trends unavailable:', e.message)
    return [
      'Alcalá de Henares noticias',
      'Torrejón de Ardoz',
      'Coslada hoy',
      'Corredor del Henares',
      'noticias locales Henares',
    ]
  }
}

async function getBeehiivLatest(publicationId) {
  if (!publicationId) return null

  const candidates = [
    'https://henaresdaily.es/rss',
    `https://www.beehiiv.com/rss/${publicationId}`,
  ]

  const parser = new XMLParser({ ignoreAttributes: false })

  for (const url of candidates) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'HenaresDaily-SEO-Bot/1.0' },
        signal: AbortSignal.timeout(6000),
      })
      if (!res.ok) continue

      const xml = await res.text()
      const parsed = parser.parse(xml)
      const items = parsed?.rss?.channel?.item
      if (!items) continue

      const latest = Array.isArray(items) ? items[0] : items
      return {
        title: String(latest.title ?? '').trim(),
        description: String(latest.description ?? '')
          .replace(/<[^>]+>/g, '')
          .slice(0, 200),
        pubDate: latest.pubDate ?? new Date().toISOString(),
      }
    } catch {
      // try next candidate
    }
  }

  return null
}

async function generateMeta(allTrends, newsletter) {
  // Only surface trends that have a local connection
  const localTrends = allTrends.filter(t =>
    LOCAL_SIGNALS.some(sig => t.toLowerCase().includes(sig))
  )
  const trendsText = localTrends.length > 0
    ? localTrends.slice(0, 3).join(', ')
    : 'noticias locales del Corredor del Henares'

  const newsletterCtx = newsletter?.title
    ? `Última edición: "${newsletter.title}"`
    : 'Newsletter de noticias locales'

  const client = new Anthropic()
  const msg = await client.messages.create({
    model: 'claude-opus-4-7',
    max_tokens: 200,
    messages: [{
      role: 'user',
      content: `Eres experto en SEO para publicaciones locales españolas.

Genera UNA meta description para la landing page de suscripción de "Henares Daily" — newsletter gratuita de noticias locales.

Contexto del día:
- ${newsletterCtx}
- Tendencias locales relevantes: ${trendsText}

Reglas:
- Entre 148 y 158 caracteres (cuenta exactamente)
- Incluir "Corredor del Henares" o un municipio concreto (Alcalá, Torrejón, Coslada…)
- Incluir "gratis"
- Terminar con un CTA de suscripción implícito
- Devuelve SOLO la meta description, sin comillas`,
    }],
  })

  const text = msg.content[0]?.type === 'text' ? msg.content[0].text.trim() : null
  if (text && text.length >= 130 && text.length <= 170) return text

  console.warn('[meta] Generated text out of range, keeping existing')
  return null
}

async function main() {
  console.log(`[${new Date().toISOString()}] === Daily SEO optimization ===`)

  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'))

  // 1. Trends
  const trends = await getDailyTrends()
  console.log(`[trends] Top 5: ${trends.slice(0, 5).join(' | ')}`)

  // 2. Latest newsletter
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID ?? ''
  const newsletter = await getBeehiivLatest(publicationId)
  if (newsletter) {
    console.log(`[beehiiv] Latest: "${newsletter.title}"`)
  } else {
    console.log('[beehiiv] No newsletter data available')
  }

  // 3. Generate meta description
  let metaDescription = config.metaDescription
  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const generated = await generateMeta(trends, newsletter)
      if (generated) {
        metaDescription = generated
        console.log(`[meta] New (${metaDescription.length} chars): ${metaDescription}`)
      }
    } catch (e) {
      console.warn('[meta] Claude API error, keeping existing:', e.message)
    }
  } else {
    console.warn('[meta] ANTHROPIC_API_KEY not set, skipping meta generation')
  }

  // 4. Write updated config
  const today = new Date().toISOString()
  const updated = {
    ...config,
    metaDescription,
    trendingTopics: trends.slice(0, 8),
    lastNewsletterTitle: newsletter?.title ?? config.lastNewsletterTitle,
    lastNewsletterDate: newsletter?.pubDate
      ? new Date(newsletter.pubDate).toISOString().split('T')[0]
      : config.lastNewsletterDate,
    lastUpdated: today,
    lastUpdatedDate: today.split('T')[0],
  }

  writeFileSync(CONFIG_PATH, JSON.stringify(updated, null, 2))
  console.log('[done] seo/config.json updated successfully')
}

main().catch(err => {
  console.error('[fatal]', err)
  process.exit(1)
})
