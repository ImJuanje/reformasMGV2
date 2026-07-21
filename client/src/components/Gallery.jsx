import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

const PROJECTS = [
  {
    label: 'Cocina — Zona Centro',
    ref: 'A-04',
    before: 'linear-gradient(135deg, #EDEFEA 0%, #EDEFEA 100%)',
    after: 'linear-gradient(135deg, #1C1B19 0%, #3A342C 100%)',
  },
  {
    label: 'Baño — Barrio San Pablo',
    ref: 'A-07',
    before: 'linear-gradient(135deg, #EDEFEA 0%, #EDEFEA 100%)',
    after: 'linear-gradient(135deg, #1F3A4D 0%, #315C77 100%)',
  },
  {
    label: 'Salón — Vivienda Feria',
    ref: 'A-11',
    before: 'linear-gradient(135deg, #EDEFEA 0%, #EDEFEA 100%)',
    after: 'linear-gradient(135deg, #6B4A2A 0%, #A9713F 100%)',
  },
]

function BeforeAfter({ project }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, pct)))
  }, [])

  return (
    <div>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full overflow-hidden select-none cursor-ew-resize border hairline"
        onPointerDown={(e) => {
          dragging.current = true
          updateFromClientX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX)
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* AFTER (base layer) */}
        <div className="absolute inset-0" style={{ background: project.after }}>
          <div className="absolute inset-0 opacity-10 bg-blueprint bg-grid" />
        </div>

        {/* BEFORE (blueprint sketch, clipped) */}
        <div
          className="absolute inset-0 bg-blueprint bg-grid"
          style={{ background: project.before, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <svg viewBox="0 0 400 300" className="w-full h-full opacity-70">
            <g stroke="#1F3A4D" strokeWidth="1.2" fill="none">
              <rect x="30" y="40" width="340" height="220" />
              <line x1="30" y1="140" x2="370" y2="140" />
              <line x1="180" y1="40" x2="180" y2="260" />
              <rect x="60" y="170" width="80" height="70" />
              <rect x="230" y="60" width="100" height="60" />
              <circle cx="180" cy="140" r="2.5" fill="#1F3A4D" />
            </g>
          </svg>
          <span className="absolute top-3 left-3 font-mono text-[10px] tracking-widest uppercase text-blueprint bg-paper/80 px-2 py-1">
            Antes
          </span>
        </div>

        <span className="absolute top-3 right-3 font-mono text-[10px] tracking-widest uppercase text-paper bg-ink/60 px-2 py-1">
          Después
        </span>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-paper pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-paper text-ink w-9 h-9 rounded-full flex items-center justify-center shadow-md">
            <MoveHorizontal size={16} />
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-between mt-3">
        <h3 className="font-display text-lg">{project.label}</h3>
        <span className="plan-index">{project.ref}</span>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-paperdim">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <span className="section-label text-copper">Proyectos</span>
        <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
          Arrastra para ver el antes y el después
        </h2>
        <p className="text-ink/60 max-w-md mt-4 leading-relaxed">
          Sustituye estos paneles por fotografías reales de tus obras —
          el deslizador ya está listo para recibirlas.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <BeforeAfter project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
