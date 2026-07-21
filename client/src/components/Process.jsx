import { motion } from 'framer-motion'

const STEPS = [
  {
    ref: 'F-01',
    title: 'Visita y diagnóstico',
    desc: 'Vamos a tu vivienda, medimos y escuchamos qué necesitas antes de proponer nada.',
  },
  {
    ref: 'F-02',
    title: 'Presupuesto cerrado',
    desc: 'Recibes un presupuesto detallado y por escrito, con materiales y plazos definidos.',
  },
  {
    ref: 'F-03',
    title: 'Ejecución de obra',
    desc: 'Un responsable de obra coordina cada gremio; tú siempre sabes en qué fase estás.',
  },
  {
    ref: 'F-04',
    title: 'Entrega y garantía',
    desc: 'Revisión final contigo y garantía por escrito sobre los trabajos realizados.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <span className="section-label text-copper">Cómo trabajamos</span>
      <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
        Cuatro fases, un solo interlocutor
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-16 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-ink/15" />
        {STEPS.map((s, i) => (
          <motion.div
            key={s.ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-3 relative z-10">
              <span className="w-3 h-3 rounded-full bg-copper shrink-0 ring-4 ring-paper" />
              <span className="plan-index text-blueprint">{s.ref}</span>
            </div>
            <h3 className="font-display text-xl mt-5 mb-2">{s.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
