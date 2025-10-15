import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { users } from './routes/users'
import { posts } from './routes/posts'

const app = new Hono()

app.route('/api/users', users)
app.route('/api/posts', posts)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
