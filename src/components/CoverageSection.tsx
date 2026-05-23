const municipalities = [
  { name: 'Alcalá de Henares', population: '200.000 hab.' },
  { name: 'Torrejón de Ardoz', population: '130.000 hab.' },
  { name: 'Coslada', population: '90.000 hab.' },
  { name: 'San Fernando de Henares', population: '40.000 hab.' },
  { name: 'Azuqueca de Henares', population: '35.000 hab.' },
  { name: 'Guadalajara capital', population: '75.000 hab.' },
]

const topics = [
  'Política municipal',
  'Cultura y eventos',
  'Deportes locales',
  'Empresas y empleo',
  'Educación',
  'Seguridad y sucesos',
  'Obras e infraestructuras',
  'Medio ambiente',
]

export default function CoverageSection() {
  return (
    <section className="py-20 px-4 bg-henares-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Municipalities */}
          <div>
            <h2 className="section-title mb-3">Cubrimos toda la comarca</h2>
            <p className="text-henares-muted mb-8">
              Más de <strong className="text-henares-ink">500.000 vecinos</strong> en los principales municipios
              del Corredor del Henares.
            </p>
            <ul className="space-y-3">
              {municipalities.map((m) => (
                <li key={m.name} className="flex items-center justify-between py-3 border-b border-henares-border last:border-0">
                  <span className="flex items-center gap-2 font-medium text-henares-ink">
                    <span className="text-henares-gold text-lg">📍</span>
                    {m.name}
                  </span>
                  <span className="text-henares-muted text-sm">{m.population}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h2 className="section-title mb-3">¿Qué cubrimos?</h2>
            <p className="text-henares-muted mb-8">
              Las noticias que importan en tu día a día, sin ruido innecesario.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {topics.map((t) => (
                <div key={t} className="flex items-center gap-2 text-henares-ink">
                  <span className="w-5 h-5 bg-henares-gold/20 text-henares-goldDark rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
