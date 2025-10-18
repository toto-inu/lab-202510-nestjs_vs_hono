interface Post {
  id: number
  title: string
  content: string
  createdAt: Date
}

/**
 * PostService - ポストデータを管理するサービス
 *
 * 注意: このサービスは一時的にメモリ上の変数でデータを保持しています。
 * データベースの代わりとして使用しているため、サーバーを再起動すると
 * すべてのデータが失われます。本番環境では適切なデータベースを使用してください。
 */
export class PostService {
  private static instance: PostService

  // 一時的なデータストレージ（データベースの代わり）
  private posts: Post[] = [
    {
      id: 1,
      title: 'First Post',
      content: 'This is the first post',
      createdAt: new Date('2025-01-01')
    }
  ]
  private nextId = 2

  private constructor() {}

  static getInstance(): PostService {
    if (!PostService.instance) {
      PostService.instance = new PostService()
    }
    return PostService.instance
  }

  async getPosts() {
    return this.posts
  }

  async getPostById(id: number) {
    return this.posts.find(post => post.id === id)
  }

  async createPost(postData: { title: string; content: string }) {
    const newPost: Post = {
      id: this.nextId++,
      title: postData.title,
      content: postData.content,
      createdAt: new Date()
    }
    this.posts.push(newPost)
    return newPost
  }
}

