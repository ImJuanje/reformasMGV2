import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'
import leadsRouter from './routes/leads.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json({ limit: '200kb' }))
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }))

// Evita el envío masivo de spam al formulario de contacto
const leadsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Demasiadas solicitudes, inténtalo más tarde.' },
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.use('/api/leads', leadsLimiter, leadsRouter)

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/reformas-albacete-mg')
  .then(() => {
    console.log('Conectado a MongoDB')
    app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`))
  })
  .catch((err) => {
    console.error('Error conectando a MongoDB:', err.message)
    process.exit(1)
  })
