const ZONES = [
  'Industria', 'Feria', 'Franciscanos', 'Cañicas', 'San Pablo',
  'Miguel Ángel Blanco', 'Medicina', 'Vereda', 'Los Titis', 'San Pedro-Mortero',
  'Santa Cruz', 'Los Llanos del Águila', 'Canal de María Cristina', 'Hermanos Falcó', 'Fátima',
]

export default function Coverage() {
  return (
    <section className="py-24 md:py-32 bg-paperdim">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="section-label text-copper">Zona de cobertura</span>
          <h2 className="font-display text-3xl md:text-4xl mt-4">
            Albacete y alrededores
          </h2>
          <p className="mt-5 text-ink/60 leading-relaxed max-w-md">
            Trabajamos en toda la capital y en un radio de unos 30 km. Estos
            son algunos de los barrios donde hemos reformado viviendas:
          </p>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
            {ZONES.map((z) => (
              <li key={z} className="font-mono text-xs text-ink/70 border-b hairline pb-2">
                {z}
              </li>
            ))}
          </ul>
        </div>

        <div className="border hairline aspect-[4/3] lg:aspect-auto">
          <iframe
            title="Zona de servicio - Albacete"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d99250.36359206018!2d-1.8563314!3d38.9793974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a633348ed0ef10b%3A0x379a28fea4ddda60!2sReformas%20Albacete%20MG!5e0!3m2!1ses!2sgr!4v1691753034072!5m2!1ses!2sgr"
            className="w-full h-full min-h-[320px] grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
