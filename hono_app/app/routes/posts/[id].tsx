import { createRoute } from 'honox/factory'

// モックデータ（API未実装のため）
const mockPostDetails: Record<string, any> = {
  '1': {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Doe',
    createdAt: '2025-10-15',
  },
  '2': {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    author: 'Jane Smith',
    createdAt: '2025-10-16',
  },
}

export default createRoute(async (c) => {
  const id = c.req.param('id')

  // モックデータから取得
  const post = mockPostDetails[id] || {
    id,
    title: `Post ${id}`,
    content: `This is a mock post with ID ${id}. The API endpoint for post details is not yet implemented.`,
    author: 'Unknown',
    createdAt: new Date().toISOString().split('T')[0],
  }

  return c.render(
    <div style={{ padding: '20px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Posts
      </a>
      <article>
        <h1>{post.title}</h1>
        <div style={{ color: '#666', marginBottom: '20px' }}>
          <span>By {post.author}</span> · <span>{post.createdAt}</span>
        </div>
        <div style={{ lineHeight: '1.6' }}>
          {post.content}
        </div>
      </article>
    </div>,
    { title: `${post.title} - Blog` }
  )
})
