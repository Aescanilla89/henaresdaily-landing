import BeehiivForm from './BeehiivForm'

export default function CTASection() {
  return (
    <section id="suscribirse-footer" className="py-20 px-4 bg-henares-blue text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Empieza mañana mismo
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Únete a los vecinos del Henares que ya reciben las noticias locales
          que importan, gratis, cada mañana.
        </p>
        <BeehiivForm theme="dark" />
        <p className="text-blue-300 text-sm mt-3">
          Gratis · Sin spam · Cancela cuando quieras
        </p>
      </div>
    </section>
  )
}
