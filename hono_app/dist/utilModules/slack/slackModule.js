import { SlackService } from './slackService.js';
export const SlackModule = {
    providers: [
        {
            token: 'SlackService',
            useClass: SlackService,
            deps: []
        }
    ],
    exports: ['SlackService']
};
