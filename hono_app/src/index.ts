import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userController } from './modules/users/index'
import { postController } from './modules/posts/index'
import { loggingMiddleware } from './core/middleware/loggingMiddleware'

// モジュールを登録（デコレータが実行されてDIコンテナに登録される）
import './modules/posts/postModule'

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
