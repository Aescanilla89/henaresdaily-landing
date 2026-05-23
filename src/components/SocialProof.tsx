const testimonials = [
  {
    quote: 'La leo cada mañana con el café. Por fin una newsletter que no me da noticias que ya sé.',
    author: 'María G.',
    location: 'Alcalá de Henares',
  },
  {
    quote: 'Me entero de todo lo que pasa en Torrejón sin tener que buscar en diez sitios distintos.',
    author: 'Carlos M.',
    location: 'Torrejón de Ardoz',
  },
  {
    quote: 'Muy buena selección de noticias. Breve, directa y al grano. Justo lo que necesitaba.',
    author: 'Ana P.',
    location: 'Coslada',
  },
]

interface SocialProofProps {
  subscriberCount: string
}

export default function SocialProof({ subscriberCount }: SocialProofProps) {
  return (
    <section className="py-20 px-4 bg-henares-blueDark text-white">
      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="text-4xl font-serif font-bold text-henares-gold mb-1">{subscriberCount}</div>
            <div className="text-blue-200 text-sm">suscriptores activos</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-henares-gold mb-1">5×</div>
            <div className="text-blue-200 text-sm">ediciones por semana</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-henares-gold mb-1">6</div>
            <div className="text-blue-200 text-sm">municipios cubiertos</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-blue-100 text-sm leading-relaxed mb-4">"{t.quote}"</p>
              <footer className="text-white font-medium text-sm">
                {t.author}
                <span className="text-blue-300 font-normal"> · {t.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
