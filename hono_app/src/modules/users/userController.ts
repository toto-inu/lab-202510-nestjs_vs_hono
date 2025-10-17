import { Hono } from 'hono'
import type { HonoEnv } from '../../core/types.js'
import { TYPES } from '../../core/types.js'
import { UserService } from './userService.js'

export const userController = new Hono<HonoEnv>()

userController.get('/', async (c) => {
  const container = c.get('container')
  const userService = container.get<UserService>(TYPES.UserService)
  const users = await userService.getUsers()
  return c.json({ users })
})

userController.post('/', async (c) => {
  const container = c.get('container')
  const userService = container.get<UserService>(TYPES.UserService)
  const userData = await c.req.json()
  const user = await userService.createUser(userData)
  return c.json(user, 201)
})

userController.get('/:id', async (c) => {
  const container = c.get('container')
  const userService = container.get<UserService>(TYPES.UserService)
  const id = c.req.param('id')
  const user = await userService.getUserById(id)
  return c.json(user)
})

