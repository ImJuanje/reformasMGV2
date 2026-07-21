"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-blueprint bg-grid opacity-0 md:opacity-100" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Reformas integrales en Albacete</span>

          <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            Reformamos tu casa con la precisión de un plano
            <span className="text-copper">.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            Presupuesto cerrado y por escrito, equipo propio de principio a fin,
            y un único responsable de obra para que no tengas que estar detrás
            de nadie.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-copper"
            >
              Pide tu presupuesto
              <ArrowRight size={15} />
            </a>

            <a
              href="https://wa.me/34967800098"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink/25 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-ink"
            >
              <MessageCircle size={15} />
              WhatsApp directo
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-ink/15 pt-6">
            {[
              ["18", "años en Albacete"],
              ["400+", "reformas entregadas"],
              ["100%", "presupuesto por escrito"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl">{n}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase leading-tight tracking-wide text-ink/55">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <BlueprintHouse />
        </motion.div>
      </div>
    </section>
  );
}

function BlueprintHouse() {
  return (
    <div className="corner-mark relative mx-auto aspect-[4/5] w-full max-w-md text-ink/30">
      <svg viewBox="0 0 400 500" className="h-full w-full">
        <defs>
          <clipPath id="rightHalf">
            <rect x="200" y="0" width="200" height="500" />
          </clipPath>
        </defs>

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
  );
}