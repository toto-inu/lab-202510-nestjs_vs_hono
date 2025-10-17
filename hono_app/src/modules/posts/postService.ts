import { injectable, inject } from 'inversify'
import { TYPES } from '../../core/types.js'
import { SlackService } from '../../utilModules/slack/index.js'

@injectable()
export class PostService {
  constructor(@inject(TYPES.SlackService) private slackService: SlackService) {}

  async getPosts() {
    return [{ id: 1, title: 'First Post' }]
  }

  async createPost(postData: any) {
    const post = { id: Date.now(), ...postData }

    // Slack通知を送信
    await this.slackService.notifyPostCreated(post.id, post.title || 'Untitled')

    return post
  }
}

