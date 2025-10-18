import { createRoute } from 'honox/factory'
import { PostService } from '../../../src/modules/posts/index.js'

export default createRoute(async (c) => {
  const id = c.req.param('id')
  const postId = parseInt(id, 10)

  // PostServiceのシングルトンインスタンスを使用してデータを取得
  const postService = PostService.getInstance()
  const post = await postService.getPostById(postId)

  // 存在しないIDの場合は404を返す
  if (!post) {
    return c.notFound()
  }

  // createdAtをフォーマット
  const formattedDate = post.createdAt.toISOString().split('T')[0]

  return c.render(
    <div style={{ padding: '20px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Posts
      </a>
      <article>
        <h1>{post.title}</h1>
        <div style={{ color: '#666', marginBottom: '20px' }}>
          <span>{formattedDate}</span>
        </div>
        <div style={{ lineHeight: '1.6' }}>
          {post.content}
        </div>
      </article>
    </div>
  )
})
