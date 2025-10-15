export class PostService {
  async getPosts() {
    // DBアクセスやビジネスロジック
    return []
  }

  async createPost(postData: any) {
    // 投稿作成ロジック
    return { id: 1, ...postData }
  }
}

