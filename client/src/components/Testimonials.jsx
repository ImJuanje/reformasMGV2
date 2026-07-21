import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Marisa G.',
    zone: 'Barrio San Pablo',
    text: 'Cumplieron el plazo y el presupuesto que nos dieron por escrito, sin ningún extra de última hora.',
  },
  {
    name: 'Javier R.',
    zone: 'Zona Centro',
    text: 'Reformamos la cocina y el baño a la vez. Un solo responsable de obra nos mantuvo informados todo el proceso.',
  },
  {
    name: 'Comunidad Hermanos Falcó',
    zone: 'Comunidad de vecinos',
    text: 'Se encargaron de la licencia y de coordinar todos los gremios en la reforma de las zonas comunes.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <span className="section-label text-copper">Clientes</span>
      <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
        Lo que dicen quienes ya han reformado con nosotros
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {REVIEWS.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border hairline p-8"
          >
            <div className="flex gap-1 text-copper mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="font-display text-lg leading-relaxed text-ink/90">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs tracking-wide uppercase text-ink/50">
              {r.name} — {r.zone}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
