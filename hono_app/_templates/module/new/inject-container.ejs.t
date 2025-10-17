---
to: src/core/container.ts
inject: true
after: "import { SlackService } from '../utilModules/slack/slackService.js'"
---
import { <%= h.changeCase.pascal(name) %>Service } from '../modules/<%= name %>/<%= h.changeCase.camel(name) %>Service.js'
