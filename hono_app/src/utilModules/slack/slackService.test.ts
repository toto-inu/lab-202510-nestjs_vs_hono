import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { SlackService } from './slackService.js'
import { Logger } from '../logger.js'

// Loggerをモック化
vi.mock('../logger.js', () => ({
  Logger: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
    debug: vi.fn()
  }
}))

describe('SlackService', () => {
  let slackService: SlackService

  beforeEach(() => {
    slackService = new SlackService()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('sendNotification', () => {
    it('通知メッセージをログに出力する', async () => {
      const message = 'Test notification'

      await slackService.sendNotification(message)

      expect(Logger.info).toHaveBeenCalledWith(
        'SlackService',
        `Notification sent: ${message}`
      )
    })

    it('空のメッセージを処理できる', async () => {
      const message = ''

      await slackService.sendNotification(message)

      expect(Logger.info).toHaveBeenCalledWith(
        'SlackService',
        'Notification sent: '
      )
    })
  })

  describe('notifyError', () => {
    it('エラー通知を送信する', async () => {
      const error = 'Database connection failed'

      await slackService.notifyError(error)

      expect(Logger.info).toHaveBeenCalledWith(
        'SlackService',
        `Notification sent: Error occurred: ${error}`
      )
    })

    it('異なるエラーメッセージを処理できる', async () => {
      const errors = [
        'Network timeout',
        'Invalid input',
        'Authentication failed'
      ]

      for (const error of errors) {
        await slackService.notifyError(error)
      }

      expect(Logger.info).toHaveBeenCalledTimes(errors.length)
      errors.forEach((error, index) => {
        expect((Logger.info as any).mock.calls[index][1]).toContain(
          `Error occurred: ${error}`
        )
      })
    })
  })
})
