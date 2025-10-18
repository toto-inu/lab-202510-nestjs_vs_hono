import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { userController } from '../src/modules/users/index.js'
import { postController } from '../src/modules/posts/index.js'

const app = createApp()

// Add API routes
app.route('/api/users', userController)
app.route('/api/posts', postController)

showRoutes(app)

export default app
