import type { ModuleMetadata } from '../../core/module.js'
import { SlackService } from './slackService.js'

export const SlackModule: ModuleMetadata = {
  providers: [
    {
      token: 'SlackService',
      useClass: SlackService,
      deps: []
    }
  ],
  exports: ['SlackService']
}
