import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 30 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    service: { type: String, required: true, trim: true, maxlength: 80 },
    message: { type: String, trim: true, maxlength: 2000, default: '' },
    status: {
      type: String,
      enum: ['nuevo', 'contactado', 'presupuestado', 'cerrado'],
      default: 'nuevo',
    },
    source: { type: String, default: 'web' },
  },
  { timestamps: true }
)

export default mongoose.model('Lead', leadSchema)
