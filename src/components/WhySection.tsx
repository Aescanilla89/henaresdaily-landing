const benefits = [
  {
    icon: '📰',
    title: 'Solo noticias locales',
    description: 'Nada de titulares nacionales que ya lees en otro sitio. Solo lo que pasa en tu comarca.',
  },
  {
    icon: '⏰',
    title: 'Cada mañana, puntual',
    description: 'En tu bandeja de entrada antes de las 8:00 h, de lunes a viernes. Sin interrupciones.',
  },
  {
    icon: '🆓',
    title: 'Gratis para siempre',
    description: 'La suscripción básica no cuesta nada. Nunca te pediremos tarjeta para leer las noticias.',
  },
  {
    icon: '🎯',
    title: 'Sin algoritmos',
    description: 'No decidimos qué lees según engagement. Cubrimos lo que es importante para tu vecindario.',
  },
]

export default function WhySection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">¿Por qué Henares Daily?</h2>
          <p className="text-henares-muted text-lg max-w-xl mx-auto">
            La información local que necesitas, sin el ruido que no quieres.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card text-center">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-serif font-semibold text-lg text-henares-ink mb-2">{b.title}</h3>
              <p className="text-henares-muted text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
