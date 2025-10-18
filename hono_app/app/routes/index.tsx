import { createRoute } from 'honox/factory'
import { PostService } from '../../src/modules/posts/index.js'

export default createRoute(async (c) => {
  const postService = PostService.getInstance()
  const posts = await postService.getPosts()

  return c.render(
    <div style={{ padding: '20px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Posts</h1>

      {/* New Post Form */}
      <div style={{ marginBottom: '32px', padding: '20px', border: '2px solid #0066cc', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ marginTop: 0 }}>Create New Post</h2>
        <form method="post" action="/posts/create" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div>
            <label htmlFor="content" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
              Content
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={4}
              style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            style={{ padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Create Post
          </button>
        </form>
      </div>

      {/* Posts List */}
      <h2>All Posts</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {posts.map((post: any) => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>
              <a href={`/posts/${post.id}`} style={{ color: '#0066cc', textDecoration: 'none' }}>
                {post.title}
              </a>
            </h3>
            <p style={{ color: '#666', margin: '8px 0 0 0' }}>
              {post.content}
            </p>
            <small style={{ color: '#999' }}>
              Posted on {new Date(post.createdAt).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>,
    { title: 'Posts - Blog' }
  )
})
