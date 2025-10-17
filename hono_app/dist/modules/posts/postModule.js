import { Module } from '../../core/module.js';
import { PostService } from './postService.js';
import { SlackModule } from '../../utilModules/slack/index.js';
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
export class PostModule {
}
