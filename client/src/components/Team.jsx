import { motion } from 'framer-motion'

export default function Team() {
  return (
    <section className="py-24 md:py-32 bg-paperdim">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 aspect-[4/5] border hairline bg-ink flex items-end p-8"
        >
          <div className="text-paper">
            <span className="plan-index text-blueprint-line">A-EQ</span>
            <p className="font-display text-2xl mt-3">Equipo propio</p>
            <p className="text-paper/60 text-sm mt-2">Fontanería · Electricidad · Albañilería · Acabados</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="section-label text-copper">Quiénes somos</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-lg">
            18 años reformando casas en Albacete
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-xl">
            Somos un equipo propio de fontaneros, electricistas, albañiles y
            pintores — no subcontratamos cada gremio por separado. Eso nos
            permite dar un presupuesto cerrado y cumplirlo, y que tengas
            siempre un único responsable de obra al que llamar.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            Gestionamos también las licencias necesarias para tu reforma,
            para que no tengas que ocuparte del papeleo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
