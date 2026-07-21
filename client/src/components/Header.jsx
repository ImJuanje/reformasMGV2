import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl tracking-tight">Reformas Albacete</span>
          <span className="font-mono text-xs tracking-[0.2em] text-copper border border-copper/40 px-1.5 py-0.5">
            MG
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] tracking-wide uppercase text-ink/70 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:967800098"
            className="flex items-center gap-2 font-mono text-sm text-ink/80 hover:text-ink transition-colors"
          >
            <Phone size={15} strokeWidth={1.5} />
            967 800 098
          </a>
          <a
            href="#contacto"
            className="bg-ink text-paper px-5 py-2.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-copper transition-colors"
          >
            Pedir presupuesto
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-ink/10 px-5 py-6 flex flex-col gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-wide uppercase text-ink/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:967800098"
            className="flex items-center gap-2 font-mono text-sm text-ink pt-2 border-t border-ink/10"
          >
            <Phone size={15} strokeWidth={1.5} />
            967 800 098
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-ink text-paper px-5 py-3 text-center font-mono text-xs tracking-[0.15em] uppercase"
          >
            Pedir presupuesto
          </a>
        </div>
      )}
    </header>
  )
}
