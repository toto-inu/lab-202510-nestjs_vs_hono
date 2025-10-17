import { Hono } from 'hono'
import { container } from '../../core/container.js'
import { TYPES } from '../../core/types.js'
import { PostService } from './postService.js'

export const postController = new Hono()

postController.get('/', async (c) => {
  const postService = container.get<PostService>(TYPES.PostService)
  const posts = await postService.getPosts()
  return c.json({ posts })
})

postController.post('/', async (c) => {
  const postService = container.get<PostService>(TYPES.PostService)
  const postData = await c.req.json()
  const post = await postService.createPost(postData)
  return c.json(post, 201)
})

