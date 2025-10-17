---
to: src/core/types.ts
inject: true
after: "SlackService: Symbol.for('SlackService'),"
---
  <%= h.changeCase.pascal(name) %>Service: Symbol.for('<%= h.changeCase.pascal(name) %>Service'),
