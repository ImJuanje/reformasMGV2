# Reformas Albacete MG — Rediseño fullstack

Rediseño completo de reformasalbacete.es: frontend en React (Vite + Tailwind
+ Framer Motion) y backend en Node/Express + MongoDB para capturar las
solicitudes de presupuesto del formulario de contacto.

## Dirección de diseño

- **Concepto**: la reforma como oficio técnico — del plano a la obra
  terminada. Se ve en el hero (casa que pasa de plano a construida) y en
  el deslizador de proyectos (antes = boceto técnico, después = acabado).
- **Paleta**: grafito `#1C1B19`, papel `#EDEFEA`, azul plano `#1F3A4D`,
  cobre envejecido `#A9713F`, piedra `#C9C2B3`.
- **Tipografía**: Fraunces (titulares), Inter (cuerpo), IBM Plex Mono
  (etiquetas, precios, referencias de plano — "A-01", "P-02"...).
- **Contenido**: todos los textos, precios, valoraciones y estadísticas
  (18 años, 400+ reformas, rangos de precio) son **contenido de ejemplo**
  a sustituir por tus datos reales antes de publicar.
- Las fotos "antes/después" son paneles ilustrativos (el slider ya
  funciona por arrastre); sustitúyelos por fotografías reales de obras.

## Estructura

```
reformas-albacete-mg/
├── client/     React + Vite + Tailwind (frontend)
└── server/     Express + MongoDB (API de solicitudes de presupuesto)
```

## Puesta en marcha

### 1. Backend

```bash
cd server
npm install
cp .env.example .env     # edita MONGODB_URI si usas MongoDB Atlas
npm run dev               # http://localhost:4000
```

Necesitas MongoDB corriendo localmente (`mongod`) o una URI de
[MongoDB Atlas](https://www.mongodb.com/atlas) (capa gratuita válida).

### 2. Frontend

```bash
cd client
npm install
npm run dev                # http://localhost:5173
```

El frontend hace peticiones a `/api/leads`, redirigidas por Vite al
backend en desarrollo (ver `vite.config.js`). En producción, sirve el
frontend detrás del mismo dominio/proxy que la API, o cambia la URL del
`fetch` en `src/components/Contact.jsx`.

### 3. Ver las solicitudes recibidas

```
GET http://localhost:4000/api/leads?key=TU_ADMIN_KEY
```

`ADMIN_KEY` se define en `server/.env`. Es una protección mínima; para
producción real, añade autenticación propiamente dicha (JWT, sesión de
admin, etc.) antes de exponer el endpoint.

## Próximos pasos sugeridos

- Sustituir estadísticas, precios y testimonios por datos reales.
- Sustituir los paneles del slider antes/después por fotos reales de obras.
- Conectar el envío de leads a un aviso por email o WhatsApp (p. ej. con
  Nodemailer o la API de WhatsApp Business) además de guardarlo en MongoDB.
- Desplegar: frontend en Vercel/Netlify, backend en Render/Railway,
  base de datos en MongoDB Atlas.
