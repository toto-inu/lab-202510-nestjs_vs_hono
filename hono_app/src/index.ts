import 'reflect-metadata'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import './core/container.js' // Inversifyコンテナを初期化
import { userController } from './modules/users/index.js'
import { postController } from './modules/posts/index.js'
import { loggingMiddleware } from './core/middleware/loggingMiddleware.js'

const app = new Hono()

// ロギングミドルウェアを適用
app.use('*', loggingMiddleware)

app.route('/api/users', userController)
app.route('/api/posts', postController)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
