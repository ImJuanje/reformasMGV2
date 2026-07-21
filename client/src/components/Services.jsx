import { motion } from 'framer-motion'
import {
  Home,
  Hammer,
  Bath,
  ChefHat,
  Building2,
  Store,
  Paintbrush,
  Building,
  Warehouse,
} from 'lucide-react'

const SERVICES = [
  { icon: Home, title: 'Reforma integral', desc: 'Vivienda completa: instalaciones, distribución y acabados.' },
  { icon: Hammer, title: 'Reforma parcial', desc: 'Una zona concreta, sin tocar el resto de la casa.' },
  { icon: Bath, title: 'Reforma de baño', desc: 'Plato de ducha, fontanería, alicatado y ventilación.' },
  { icon: ChefHat, title: 'Reforma de cocina', desc: 'Mobiliario, encimeras, electrodomésticos e instalación.' },
  { icon: Building2, title: 'Pisos y casas', desc: 'Reformas completas de vivienda, llave en mano.' },
  { icon: Store, title: 'Comunidades y locales', desc: 'Zonas comunes, fachadas y locales comerciales.' },
  { icon: Paintbrush, title: 'Pintura', desc: 'Interior, exterior y tratamiento de humedades.' },
  { icon: Building, title: 'Obra nueva', desc: 'Construcción desde cero, a medida de tu proyecto.' },
  { icon: Warehouse, title: 'Naves industriales', desc: 'Naves industriales y agrícolas, dentro y fuera.' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="section-label text-copper">Servicios</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
            Un único equipo para cada fase de la reforma
          </h2>
        </div>
        <p className="text-ink/60 max-w-sm leading-relaxed">
          Fontanería, electricidad, albañilería, carpintería y acabados —
          coordinado por un solo responsable de obra.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l hairline">
        {SERVICES.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="border-b border-r hairline p-8 group hover:bg-ink hover:text-paper transition-colors duration-300"
          >
            <span className="plan-index group-hover:text-blueprint-line/80">
              {String(i + 1).padStart(2, '0')}
            </span>
            <Icon
              size={26}
              strokeWidth={1.3}
              className="mt-5 mb-5 text-copper group-hover:text-copper-light"
            />
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-sm text-ink/60 group-hover:text-paper/70 leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
