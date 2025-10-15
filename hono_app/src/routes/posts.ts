import { Hono } from 'hono'
import { PostService } from '../services/postService.js'

const posts = new Hono()
const postService = new PostService()

posts.get('/', async (c) => {
  const posts = await postService.getPosts()
  return c.json({ posts })
})

posts.post('/', async (c) => {
  const postData = await c.req.json()
  const post = await postService.createPost(postData)
  return c.json(post, 201)
})

export { posts }

