import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, CheckCircle2, Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Reforma integral',
  'Reforma parcial',
  'Reforma de baño',
  'Reforma de cocina',
  'Reforma de piso',
  'Reforma de casa',
  'Reforma de comunidad',
  'Reforma de local',
  'Pintura',
  'Obra nueva',
  'Nave industrial o agrícola',
]

const initialForm = { name: '', phone: '', email: '', service: SERVICE_OPTIONS[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const API_URL = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="section-label text-copper">Contacto</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 max-w-sm">
            Pide tu presupuesto sin compromiso
          </h2>
          <p className="mt-5 text-ink/60 leading-relaxed max-w-sm">
            Respondemos en menos de 24 horas laborables con una primera
            valoración de tu proyecto.
          </p>

          <div className="mt-10 space-y-5">
            <a href="tel:967800098" className="flex items-center gap-3 text-ink/80 hover:text-ink">
              <Phone size={17} strokeWidth={1.5} className="text-copper" />
              <span className="font-mono text-sm">967 800 098</span>
            </a>
            <a href="mailto:info@reformasalbacete.es" className="flex items-center gap-3 text-ink/80 hover:text-ink">
              <Mail size={17} strokeWidth={1.5} className="text-copper" />
              <span className="font-mono text-sm">info@reformasalbacete.es</span>
            </a>
            <div className="flex items-center gap-3 text-ink/80">
              <Clock size={17} strokeWidth={1.5} className="text-copper" />
              <span className="font-mono text-sm">Abiertos los 7 días de la semana</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7 border hairline p-8 md:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Nombre *">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input"
                placeholder="Tu nombre"
              />
            </Field>
            <Field label="Teléfono *">
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="input"
                placeholder="600 000 000"
              />
            </Field>
            <Field label="Correo electrónico *">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input"
                placeholder="tu@email.com"
              />
            </Field>
            <Field label="Tipo de reforma *">
              <select name="service" value={form.service} onChange={handleChange} className="input">
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Cuéntanos tu proyecto" className="mt-6">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="input resize-none"
              placeholder="Metros cuadrados, qué te gustaría cambiar, plazos que manejas..."
            />
          </Field>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ink text-paper px-8 py-3.5 font-mono text-xs tracking-[0.15em] uppercase hover:bg-copper transition-colors disabled:opacity-60"
          >
            {status === 'sending' && <Loader2 size={15} className="animate-spin" />}
            {status === 'sending' ? 'Enviando…' : 'Enviar solicitud'}
          </button>

          {status === 'success' && (
            <p className="mt-4 flex items-center gap-2 text-sm text-blueprint">
              <CheckCircle2 size={16} /> Recibido. Te llamamos en menos de 24h laborables.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-700">
              No se ha podido enviar. Llámanos directamente al 967 800 098.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[11px] tracking-wide uppercase text-ink/50">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
