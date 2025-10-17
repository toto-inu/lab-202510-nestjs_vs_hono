import { Module } from '../../core/module'
import { PostService } from './postService'
import { SlackModule } from '../../utilModules/slack/index'

@Module({
  imports: [SlackModule],
  providers: [
    {
      token: 'PostService',
      useClass: PostService,
      deps: ['SlackService']
    }
  ]
})
export class PostModule {}
