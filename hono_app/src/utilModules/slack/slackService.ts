import { injectable } from 'inversify'
import { Logger } from '../logger.js'

@injectable()
export class SlackService {
  async sendNotification(message: string): Promise<void> {
    // 実際のSlack APIを呼び出す代わりに、ログ出力でシミュレート
    Logger.info('SlackService', `Notification sent: ${message}`)

    // 本番環境では以下のようなコードになります：
    // const webhookUrl = process.env.SLACK_WEBHOOK_URL
    // await fetch(webhookUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ text: message })
    // })
  }

  async notifyPostCreated(postId: number, title: string): Promise<void> {
    await this.sendNotification(`New post created: #${postId} - "${title}"`)
  }

  async notifyError(error: string): Promise<void> {
    await this.sendNotification(`Error occurred: ${error}`)
  }
}
