export class UserService {
  async getUsers() {
    // DBアクセスやビジネスロジック
    return []
  }

  async createUser(userData: any) {
    // ユーザー作成ロジック
    return { id: 1, ...userData }
  }
}

