import { createRoute } from 'honox/factory'
import { PostService } from '../../../src/modules/posts/index.js'

export const POST = createRoute(async (c) => {
  const postService = PostService.getInstance()
  const formData = await c.req.formData()
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  if (title && content) {
    await postService.createPost({ title, content })
  }

  return c.redirect('/')
})
