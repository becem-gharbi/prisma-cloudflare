import type { H3Event } from 'h3'

export function checkAuth(event: H3Event) {
  if (!event.context.auth.data) {
    throw createError({ message: 'unauthorized', statusCode: 401 })
  }
  return event.context.auth.data
}
