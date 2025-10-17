import type { ModuleMetadata } from '../../core/module'
import { SlackService } from './slackService'

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
