export class PostService {
  async getPosts() {
    return [{ id: 1, title: 'First Post' }]
  }

  async createPost(postData: any) {
    return { id: 2, ...postData }
  }
}

