import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import seoConfig from '../../seo/config.json'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://henaresdaily.es'),
  title: {
    default: seoConfig.metaTitle,
    template: '%s | Henares Daily',
  },
  description: seoConfig.metaDescription,
  keywords: [
    'noticias Alcalá de Henares',
    'noticias Corredor del Henares',
    'noticias Torrejón de Ardoz',
    'newsletter Henares',
    'noticias locales Henares',
    'Coslada noticias',
    'San Fernando de Henares',
    'Azuqueca de Henares noticias',
    ...seoConfig.trendingTopics,
  ],
  alternates: {
    canonical: 'https://henaresdaily.es',
    languages: { 'es-ES': 'https://henaresdaily.es' },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://henaresdaily.es',
    siteName: 'Henares Daily',
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Henares Daily — Newsletter del Corredor del Henares' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
