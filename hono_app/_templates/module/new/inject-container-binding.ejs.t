---
to: src/core/container.ts
inject: true
after: "container.bind(TYPES.SlackService).to(SlackService).inSingletonScope()"
---
container.bind(TYPES.<%= h.changeCase.pascal(name) %>Service).to(<%= h.changeCase.pascal(name) %>Service).inSingletonScope()
