import { Hono } from 'hono'
import { container } from '../../core/di-container.js'
import { PostService } from './postService.js'

export const postController = new Hono()

postController.get('/', async (c) => {
  const postService = container.resolve<PostService>('PostService')
  const posts = await postService.getPosts()
  return c.json({ posts })
})

postController.post('/', async (c) => {
  const postService = container.resolve<PostService>('PostService')
  const postData = await c.req.json()
  const post = await postService.createPost(postData)
  return c.json(post, 201)
})

