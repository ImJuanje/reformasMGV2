import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-0 md:opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Reformas integrales en Albacete</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-5 max-w-xl">
            Reformamos tu casa con la precisión de un plano
            <span className="text-copper">.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">
            Presupuesto cerrado y por escrito, equipo propio de principio a fin,
            y un único responsable de obra para que no tengas que estar detrás
            de nadie.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-copper transition-colors"
            >
              Pide tu presupuesto
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/34967800098"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:border-ink transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp directo
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-md border-t border-ink/15 pt-6 gap-4">
            {[
              ['18', 'años en Albacete'],
              ['400+', 'reformas entregadas'],
              ['100%', 'presupuesto por escrito'],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl">{n}</dt>
                <dd className="font-mono text-[11px] uppercase tracking-wide text-ink/55 mt-1 leading-tight">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <BlueprintHouse />
        </motion.div>
      </div>
    </section>
  )
}

/* Signature element: a house that reads as a technical blueprint on the left
   half and as a finished, warm elevation on the right half — the same idea
   that runs through the whole site (from plano to obra terminada). */
function BlueprintHouse() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto corner-mark text-ink/30">
      <svg viewBox="0 0 400 500" className="w-full h-full">
        <defs>
          <clipPath id="rightHalf">
            <rect x="200" y="0" width="200" height="500" />
          </clipPath>
        </defs>

        {/* Blueprint half (left) */}
        <g stroke="#1F3A4D" strokeWidth="1.4" fill="none" opacity="0.85">
          <rect x="60" y="220" width="280" height="220" />
          <polygon points="60,220 200,120 340,220" />
          <line x1="200" y1="120" x2="200" y2="440" strokeDasharray="4 4" />
          <rect x="90" y="300" width="60" height="80" />
          <rect x="250" y="300" width="60" height="80" />
          <circle cx="200" cy="200" r="3" fill="#1F3A4D" />
          <text x="64" y="470" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#1F3A4D">
            A-01 · ALZADO
          </text>
        </g>

        {/* Built half (right), clipped */}
        <g clipPath="url(#rightHalf)">
          <rect x="60" y="220" width="280" height="220" fill="#EDEFEA" stroke="#1C1B19" strokeWidth="1.4" />
          <polygon points="60,220 200,120 340,220" fill="#A9713F" stroke="#1C1B19" strokeWidth="1.4" />
          <rect x="90" y="300" width="60" height="80" fill="#1C1B19" opacity="0.08" stroke="#1C1B19" strokeWidth="1.2" />
          <rect x="250" y="300" width="60" height="80" fill="#7FA8BD" opacity="0.5" stroke="#1C1B19" strokeWidth="1.2" />
          <line x1="60" y1="220" x2="340" y2="220" stroke="#1C1B19" strokeWidth="1.4" />
        </g>

        <line x1="200" y1="120" x2="200" y2="440" stroke="#1C1B19" strokeWidth="1.4" />
      </svg>
    </div>
  )
}
