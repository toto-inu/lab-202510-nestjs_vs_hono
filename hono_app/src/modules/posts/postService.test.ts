import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PostService } from './postService.js'
import { SlackService } from '../../utilModules/slack/index.js'

describe('PostService', () => {
  let postService: PostService
  let mockSlackService: SlackService

  beforeEach(() => {
    // SlackServiceのモックを作成
    mockSlackService = {
      sendNotification: vi.fn().mockResolvedValue(undefined),
      notifyPostCreated: vi.fn().mockResolvedValue(undefined),
      notifyError: vi.fn().mockResolvedValue(undefined)
    } as any

    // DIを使ってPostServiceにモックを注入
    postService = new PostService(mockSlackService)
  })

  describe('getPosts', () => {
    it('投稿のリストを返す', async () => {
      const posts = await postService.getPosts()

      expect(posts).toBeDefined()
      expect(Array.isArray(posts)).toBe(true)
      expect(posts.length).toBeGreaterThan(0)
      expect(posts[0]).toHaveProperty('id')
      expect(posts[0]).toHaveProperty('title')
    })
  })

  describe('createPost', () => {
    it('指定されたデータで新しい投稿を作成する', async () => {
      const postData = { title: 'Test Post', content: 'Test content' }
      const post = await postService.createPost(postData)

      expect(post).toBeDefined()
      expect(post).toHaveProperty('id')
      expect(post.title).toBe(postData.title)
      expect(post.content).toBe(postData.content)
    })

    it('投稿作成時にSlack通知を送信する', async () => {
      const postData = { title: 'Important Post' }
      const post = await postService.createPost(postData)

      expect(mockSlackService.notifyPostCreated).toHaveBeenCalledWith(
        post.id,
        'Important Post'
      )
    })

    it('タイトルがない場合は"Untitled"を使用する', async () => {
      const postData = { content: 'No title here' }
      const post = await postService.createPost(postData)

      expect(mockSlackService.notifyPostCreated).toHaveBeenCalledWith(
        post.id,
        'Untitled'
      )
    })

    it('Slack通知が失敗した場合はエラーをスローする', async () => {
      // Slackサービスが失敗する場合のテスト
      mockSlackService.notifyPostCreated = vi.fn().mockRejectedValue(new Error('Slack API error'))

      const postData = { title: 'Test' }

      // エラーがスローされることを確認
      await expect(postService.createPost(postData)).rejects.toThrow('Slack API error')
    })
  })
})
