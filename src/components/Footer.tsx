export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-henares-ink text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-serif font-bold text-lg mb-1">
              Henares<span className="text-henares-gold">Daily</span>
            </div>
            <p className="text-gray-400 text-sm">
              La newsletter del Corredor del Henares
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="mailto:hola@henaresdaily.es" className="hover:text-white transition-colors">
              hola@henaresdaily.es
            </a>
            <span>·</span>
            <a href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <span>·</span>
            <a href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </a>
          </nav>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">
          © {year} Henares Daily · Alcalá de Henares, España
        </div>
      </div>
    </footer>
  )
}
