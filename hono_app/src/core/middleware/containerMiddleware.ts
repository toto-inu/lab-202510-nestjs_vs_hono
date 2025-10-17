import type { MiddlewareHandler } from 'hono'
import type { HonoEnv } from '../types.js'
import { container } from '../container.js'

export const containerMiddleware = (): MiddlewareHandler<HonoEnv> => {
  return async (c, next) => {
    c.set('container', container)
    await next()
  }
}
