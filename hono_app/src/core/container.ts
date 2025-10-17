import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types.js'
import { UserService } from '../modules/users/userService.js'
import { PostService } from '../modules/posts/postService.js'
import { SlackService } from '../utilModules/slack/slackService.js'

const container = new Container()

// サービスをコンテナにバインド
container.bind(TYPES.UserService).to(UserService).inSingletonScope()
container.bind(TYPES.PostService).to(PostService).inSingletonScope()
container.bind(TYPES.SlackService).to(SlackService).inSingletonScope()

export { container }
