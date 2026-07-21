// Limitador simple en memoria. En serverless no hay garantía de que todas
// las invocaciones compartan proceso, así que esto es una capa best-effort
// contra spam accidental, no una protección estricta. Para un límite fiable
// entre todas las instancias, usa un almacén externo como Upstash Redis.
const hits = global._rateHits || (global._rateHits = new Map())

const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 20

export function isRateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip) || { count: 0, start: now }

  if (now - entry.start > WINDOW_MS) {
    entry.count = 0
    entry.start = now
  }

  entry.count += 1
  hits.set(ip, entry)

  return entry.count > MAX_REQUESTS
}
