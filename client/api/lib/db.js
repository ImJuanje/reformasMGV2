import mongoose from 'mongoose'

// En serverless (Vercel), cada invocación puede reutilizar la misma instancia
// "caliente" del proceso. Cachear la conexión evita abrir una conexión nueva
// a MongoDB en cada petición y agotar el pool de conexiones de Atlas.
let cached = global._mongooseConn
if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI
    if (!uri) throw new Error('Falta la variable de entorno MONGODB_URI')

    cached.promise = mongoose
      .connect(uri, { maxPoolSize: 5 })
      .then((m) => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}
