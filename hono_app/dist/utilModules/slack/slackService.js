import { Injectable } from '../../core/module.js';
@Injectable()
export class SlackService {
    async sendNotification(message) {
        // 実際のSlack APIを呼び出す代わりに、ログ出力でシミュレート
        console.log(`[Slack Notification] ${message}`);
        // 本番環境では以下のようなコードになります：
        // const webhookUrl = process.env.SLACK_WEBHOOK_URL
        // await fetch(webhookUrl, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ text: message })
        // })
    }
    async notifyPostCreated(postId, title) {
        await this.sendNotification(`New post created: #${postId} - "${title}"`);
    }
    async notifyError(error) {
        await this.sendNotification(`Error occurred: ${error}`);
    }
}
