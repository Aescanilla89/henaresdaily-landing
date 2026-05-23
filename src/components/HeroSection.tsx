import BeehiivForm from './BeehiivForm'

interface HeroProps {
  subscriberCount: string
  lastNewsletterTitle: string
}

export default function HeroSection({ subscriberCount, lastNewsletterTitle }: HeroProps) {
  return (
    <section className="bg-henares-blue text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-henares-gold rounded-full animate-pulse" />
          Última edición: <span className="font-medium truncate max-w-xs">{lastNewsletterTitle}</span>
        </div>

        {/* Headline */}
        <h1 className="newsletter-description font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
          Lo que pasa en el Henares,<br />
          <span className="text-henares-gold">cada mañana en tu email</span>
        </h1>

        {/* Subheadline */}
        <p className="newsletter-description text-lg md:text-xl text-blue-100 mb-10 max-w-xl mx-auto">
          La newsletter gratuita de noticias locales del Corredor del Henares.
          Únete a <strong className="text-white">{subscriberCount} vecinos</strong> que empiezan el día informados.
        </p>

        {/* Form */}
        <div id="suscribirse" className="max-w-lg mx-auto">
          <BeehiivForm theme="dark" />
          <p className="text-blue-200 text-sm mt-3">
            Gratis · Sin spam · Cancela cuando quieras
          </p>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 mt-10 text-sm text-blue-200">
          <span>📍 Alcalá de Henares</span>
          <span>·</span>
          <span>📍 Torrejón de Ardoz</span>
          <span>·</span>
          <span>📍 Coslada</span>
          <span>·</span>
          <span>📍 +3 municipios</span>
        </div>
      </div>
    </section>
  )
}
