import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'

// Development: Use Vite dev server with integrated API routes
if (process.env.NODE_ENV !== 'production') {
  const { default: devServer } = await import('@hono/vite-dev-server')
  const { Hono } = await import('hono')

  const app = new Hono()

  app.use('*', devServer({
    entry: 'app/server.ts',
  }))

  serve({
    fetch: app.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  })
} else {
  // Production: Serve static files and HonoX app
  const { default: honoxApp } = await import('../server.js')

  honoxApp.use('/static/*', serveStatic({ root: './dist' }))

  serve({
    fetch: honoxApp.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  })
}
