import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: '¿Cuánto dura una reforma integral?',
    a: 'Depende del tamaño de la vivienda y el alcance de los cambios; una reforma integral de piso suele tomar entre 6 y 10 semanas. Te damos un calendario concreto en el presupuesto.',
  },
  {
    q: '¿Tramitáis vosotros la licencia de obra?',
    a: 'Sí, gestionamos la licencia necesaria según el tipo de reforma para que no tengas que ocuparte del papeleo con el ayuntamiento.',
  },
  {
    q: '¿Hay que desalojar la vivienda durante la obra?',
    a: 'En reformas parciales normalmente no. En reformas integrales lo valoramos caso a caso y te lo indicamos desde el primer presupuesto.',
  },
  {
    q: '¿Cómo se hacen los pagos?',
    a: 'Se establece un calendario de pagos por fases de obra, siempre detallado por escrito en el presupuesto antes de empezar.',
  },
  {
    q: '¿En qué zonas trabajáis?',
    a: 'Albacete capital y un radio de unos 30 km alrededor. Consulta tu zona concreta en el formulario de contacto.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 md:py-32 max-w-4xl mx-auto px-5 md:px-8">
      <span className="section-label text-copper">Preguntas frecuentes</span>
      <h2 className="font-display text-3xl md:text-4xl mt-4">
        Antes de que preguntes
      </h2>

      <div className="mt-12 border-t hairline">
        {FAQS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="border-b hairline">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg md:text-xl">{item.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-copper transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-ink/65 leading-relaxed max-w-2xl">{item.a}</p>
              </motion.div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
