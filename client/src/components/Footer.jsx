import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const SOCIAL = [
  { icon: Facebook, href: 'https://www.facebook.com/Reformas-Albacete-112800004397450/' },
  { icon: Instagram, href: 'https://www.instagram.com/reformasalbacete/' },
  { icon: Twitter, href: 'https://twitter.com/ReformaAlbacete' },
  { icon: Youtube, href: 'https://www.youtube.com/watch?v=Lt2mC56dpug' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="font-display text-xl">Reformas Albacete MG</span>
            <p className="text-paper/50 text-sm mt-4 max-w-xs leading-relaxed">
              Reformas integrales, parciales, de baño, cocina y obra nueva
              en Albacete y alrededores. Presupuesto cerrado, por escrito.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIAL.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/50 hover:text-copper transition-colors"
                  aria-label="Red social"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-paper/40">Servicios</span>
            <ul className="mt-4 space-y-2 text-sm text-paper/60">
              <li>Reforma integral</li>
              <li>Reforma de baño</li>
              <li>Reforma de cocina</li>
              <li>Obra nueva</li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-paper/40">Contacto</span>
            <ul className="mt-4 space-y-2 text-sm text-paper/60">
              <li>967 800 098</li>
              <li>info@reformasalbacete.es</li>
              <li>Albacete, Castilla-La Mancha</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/40 font-mono">
          <span>© {new Date().getFullYear()} Reformas Albacete MG</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper/70">Privacidad</a>
            <a href="#" className="hover:text-paper/70">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
