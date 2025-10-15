import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userController } from './modules/users/index.js'
import { postController } from './modules/posts/index.js'

const app = new Hono()

app.route('/api/users', userController)
app.route('/api/posts', postController)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
