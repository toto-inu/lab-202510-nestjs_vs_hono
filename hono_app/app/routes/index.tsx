import { createRoute } from 'honox/factory'
import { PostService } from '../../src/modules/posts/postService.js'

const postService = new PostService()

export default createRoute(async (c) => {
  const posts = await postService.getPosts()

  return c.render(
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Posts</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {posts.map((post: any) => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
            <h2>
              <a href={`/posts/${post.id}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
                {post.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>,
    { title: 'Posts - Blog' }
  )
})
