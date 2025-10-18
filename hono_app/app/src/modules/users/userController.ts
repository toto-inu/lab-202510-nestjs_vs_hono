import { Hono } from 'hono'
import { UserService } from './userService.js'

const userService = new UserService()

export const userController = new Hono()

userController.get('/', async (c) => {
  const users = await userService.getUsers()
  return c.json({ users })
})

userController.post('/', async (c) => {
  const userData = await c.req.json()
  const user = await userService.createUser(userData)
  return c.json(user, 201)
})

userController.get('/:id', async (c) => {
  const id = c.req.param('id')
  const user = await userService.getUserById(id)
  return c.json(user)
})

