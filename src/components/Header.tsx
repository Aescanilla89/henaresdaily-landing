export default function Header() {
  return (
    <header className="bg-henares-cream border-b border-henares-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-henares-blue font-serif font-bold text-xl tracking-tight">
            Henares<span className="text-henares-gold">Daily</span>
          </span>
        </div>
        <a
          href="#suscribirse"
          className="btn-primary text-sm py-2 px-4"
        >
          Suscribirme gratis
        </a>
      </div>
    </header>
  )
}
