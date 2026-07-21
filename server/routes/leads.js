import { Router } from 'express'
import Lead from '../models/Lead.js'

const router = Router()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// POST /api/leads — recibe una solicitud de presupuesto desde el formulario
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body || {}

    if (!name || !phone || !email || !service) {
      return res.status(400).json({ error: 'Faltan campos obligatorios.' })
    }
    if (!EMAIL_RE.test(email)) {
      return res.status(400).json({ error: 'Correo electrónico no válido.' })
    }

    const lead = await Lead.create({
      name: String(name).slice(0, 120),
      phone: String(phone).slice(0, 30),
      email: String(email).slice(0, 160),
      service: String(service).slice(0, 80),
      message: message ? String(message).slice(0, 2000) : '',
    })

    return res.status(201).json({ id: lead._id, status: 'ok' })
  } catch (err) {
    console.error('Error creando lead:', err)
    return res.status(500).json({ error: 'Error interno. Inténtalo de nuevo.' })
  }
})

// GET /api/leads — lista de solicitudes, protegido con clave simple
// Uso: GET /api/leads?key=TU_ADMIN_KEY
router.get('/', async (req, res) => {
  if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'No autorizado.' })
  }
  const leads = await Lead.find().sort({ createdAt: -1 }).limit(200)
  return res.json(leads)
})

export default router
