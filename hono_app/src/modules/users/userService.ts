import { injectable } from 'inversify'

@injectable()
export class UserService {
  async getUsers() {
    // DBアクセスやビジネスロジック
    return [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
  }

  async createUser(userData: any) {
    // ユーザー作成ロジック
    return { id: 3, ...userData }
  }

  async getUserById(id: string) {
    // ユーザー取得ロジック
    return { id, name: 'John' }
  }
}

