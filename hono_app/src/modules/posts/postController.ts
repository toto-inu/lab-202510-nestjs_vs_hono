import { Hono } from 'hono'
import { PostService } from './postService.js'

const postService = new PostService()

export const postController = new Hono()

postController.get('/', async (c) => {
  const posts = await postService.getPosts()
  return c.json({ posts })
})

postController.post('/', async (c) => {
  const postData = await c.req.json()
  const post = await postService.createPost(postData)
  return c.json(post, 201)
})

