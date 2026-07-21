import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const TIERS = [
  {
    ref: 'P-01',
    title: 'Reforma de baño',
    range: '3.500 € — 7.000 €',
    items: ['Fontanería y desagües', 'Alicatado y solado', 'Plato de ducha o bañera', 'Iluminación y ventilación'],
  },
  {
    ref: 'P-02',
    title: 'Reforma de cocina',
    range: '5.000 € — 12.000 €',
    items: ['Mobiliario a medida', 'Encimera e instalación', 'Electrodomésticos', 'Fontanería y electricidad'],
    featured: true,
  },
  {
    ref: 'P-03',
    title: 'Reforma integral',
    range: '18.000 € — 45.000 €',
    items: ['Distribución completa', 'Instalaciones nuevas', 'Suelos, tabiquería y pintura', 'Gestión de licencias'],
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-24 md:py-32 bg-blueprint-deep text-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <span className="section-label text-blueprint-line">Presupuesto orientativo</span>
        <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
          Rangos de precio por tipo de reforma
        </h2>
        <p className="text-paper/60 max-w-md mt-4 leading-relaxed">
          Cifras orientativas según proyectos anteriores en Albacete. El
          presupuesto definitivo, cerrado y sin sorpresas, es siempre gratuito.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.ref}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 border ${
                t.featured ? 'border-copper bg-paper/5' : 'border-paper/15'
              }`}
            >
              <span className="plan-index text-blueprint-line">{t.ref}</span>
              <h3 className="font-display text-2xl mt-4">{t.title}</h3>
              <p className="font-mono text-lg text-copper-light mt-2">{t.range}</p>
              <ul className="mt-6 space-y-3">
                {t.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-paper/70">
                    <Check size={15} className="text-copper mt-0.5 shrink-0" strokeWidth={2} />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-8 inline-block font-mono text-xs tracking-[0.15em] uppercase border-b border-copper text-copper-light pb-1"
              >
                Pedir presupuesto exacto
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
