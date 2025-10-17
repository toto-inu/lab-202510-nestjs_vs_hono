import { Injectable } from '../../core/module'
import { SlackService } from '../../utilModules/slack/index'

@Injectable()
export class PostService {
  constructor(private slackService: SlackService) {}

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

