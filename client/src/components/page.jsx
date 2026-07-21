"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Reformas integrales",
    text: "Transformamos viviendas, locales y oficinas con una ejecución limpia, rápida y coordinada."
  },
  {
    title: "Cocinas y baños",
    text: "Diseños funcionales, modernos y pensados para durar con acabados de alta calidad."
  },
  {
    title: "Pintura y acabados",
    text: "Renovamos espacios con una estética impecable y materiales profesionales."
  }
];

const stats = [
  { value: "15+", label: "años de experiencia" },
  { value: "300+", label: "proyectos realizados" },
  { value: "24h", label: "respuesta media" }
];

const testimonials = [
  {
    name: "María G.",
    text: "Cumplieron plazos, resolvieron todo rápido y el resultado superó lo esperado."
  },
  {
    name: "Javier P.",
    text: "Profesionales, claros y muy cuidadosos con los detalles. Totalmente recomendables."
  }
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  return (
    <main className="min-h-screen bg-[#0b0f17] text-white">
      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-white/70">REFORMAS MG</p>
            </div>
            <a
              href="#contacto"
              className="rounded-full bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Pide presupuesto
            </a>
          </header>

          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 inline-flex rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-sm font-medium text-[#fbbf24]">
                Reformas con diseño, precisión y resultado real
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Reformamos tu espacio para que parezca de revista.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Reformas integrales, cocinas, baños y acabados premium con una experiencia clara, rápida y sin sorpresas.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-[#f59e0b] px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
                >
                  Solicitar presupuesto
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-bold text-[#fbbf24]">{item.value}</p>
                    <p className="mt-1 text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%)] blur-2xl" />
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#111827] to-[#1f2937] p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-white/50">Estado del proyecto</p>
                      <p className="mt-2 text-xl font-semibold">Planificación clara</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-white/50">Entrega</p>
                      <p className="mt-2 text-xl font-semibold">Control de calidad</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-5 sm:col-span-2">
                      <p className="text-sm text-white/50">Experiencia visual</p>
                      <p className="mt-2 text-xl font-semibold">
                        Un estilo más premium, limpio y convincente para convertir más leads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">Servicios pensados para vender mejor</h2>
            <p className="mt-4 max-w-2xl text-white/65">
              Cada sección debe ayudar a que el usuario entienda rápido qué haces, por qué confiar y cómo contactar.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <p className="text-sm font-medium text-[#fbbf24]">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-3xl font-semibold">Un proceso que genera confianza</h2>
            <div className="mt-6 space-y-5">
              {[
                "Contacto rápido y primera valoración.",
                "Propuesta clara con alcance definido.",
                "Ejecución ordenada con seguimiento.",
                "Entrega final y revisión de acabados."
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f59e0b] text-sm font-bold text-black">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-white/75">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="text-3xl font-semibold">Opiniones que convierten</h2>
            <div className="mt-6 space-y-5">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl bg-black/20 p-5">
                  <p className="leading-7 text-white/75">“{t.text}”</p>
                  <p className="mt-4 font-semibold text-[#fbbf24]">{t.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#0b0f17] p-6 md:p-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Pide presupuesto en 1 minuto</h2>
              <p className="mt-4 max-w-xl text-white/65">
                CTA simple, sin fricción y visible en todo momento. Eso ayuda mucho más a convertir que una web cargada de texto.
              </p>
            </div>

            <form className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Cuéntanos tu proyecto"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="button"
                className="rounded-2xl bg-[#f59e0b] px-6 py-4 font-semibold text-black transition hover:scale-[1.01]"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}