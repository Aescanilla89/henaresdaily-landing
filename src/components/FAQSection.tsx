'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Cuánto cuesta suscribirse?',
    a: 'La suscripción a Henares Daily es completamente gratuita. Solo necesitas tu email. No pedimos tarjeta.',
  },
  {
    q: '¿Con qué frecuencia publican?',
    a: 'Publicamos de lunes a viernes. Recibirás una edición cada mañana, antes de las 8:00 h.',
  },
  {
    q: '¿Qué municipios cubre Henares Daily?',
    a: 'Cubrimos el Corredor del Henares: Alcalá de Henares, Torrejón de Ardoz, Coslada, San Fernando de Henares, Azuqueca de Henares y Guadalajara capital.',
  },
  {
    q: '¿Cómo me doy de baja?',
    a: 'En cualquier momento, con un clic. Al final de cada email hay un enlace de cancelación que funciona de forma inmediata.',
  },
  {
    q: '¿Puedo anunciar mi negocio en Henares Daily?',
    a: 'Sí. Ofrecemos espacios para negocios locales de la comarca. Escríbenos a hola@henaresdaily.es para consultar disponibilidad.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-henares-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-henares-cream/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-henares-ink">{faq.q}</span>
                <span className="text-henares-gold text-xl ml-4 flex-shrink-0">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-henares-muted leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
