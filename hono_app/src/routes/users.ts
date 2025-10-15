import { Hono } from 'hono'
import { UserService } from '../services/userService'

const users = new Hono()
const userService = new UserService()

users.get('/', async (c) => {
  const users = await userService.getUsers()
  return c.json({ users })
})

users.post('/', async (c) => {
  const userData = await c.req.json()
  const user = await userService.createUser(userData)
  return c.json(user, 201)
})

export { users }

