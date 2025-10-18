import { serve } from '@hono/node-server'

// Development: Use Vite dev server with integrated API routes
const { default: devServer } = await import('@hono/vite-dev-server')
const { Hono } = await import('hono')

const app = new Hono()

// @ts-expect-error - devServer型の互換性問題を回避
app.use('*', devServer({
  entry: 'app/server.ts',
}))

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

