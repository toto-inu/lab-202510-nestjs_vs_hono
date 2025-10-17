import { Injectable } from '../../core/module.js';
import { SlackService } from '../../utilModules/slack/index.js';
@Injectable()
export class PostService {
    slackService;
    constructor(slackService) {
        this.slackService = slackService;
    }
    async getPosts() {
        return [{ id: 1, title: 'First Post' }];
    }
    async createPost(postData) {
        const post = { id: Date.now(), ...postData };
        // Slack通知を送信
        await this.slackService.notifyPostCreated(post.id, post.title || 'Untitled');
        return post;
    }
}
