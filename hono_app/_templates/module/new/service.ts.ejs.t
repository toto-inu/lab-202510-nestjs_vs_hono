---
to: src/modules/<%= name %>/<%= h.changeCase.camel(name) %>Service.ts
---
import { injectable } from 'inversify'

@injectable()
export class <%= h.changeCase.pascal(name) %>Service {
  constructor() {}

  async get<%= h.changeCase.pascal(name) %>() {
    return [{ id: 1, name: 'Sample <%= h.changeCase.pascal(name) %>' }]
  }

  async create<%= h.changeCase.pascal(name) %>(<%= h.changeCase.camel(name) %>Data: any) {
    const <%= h.changeCase.camel(name) %> = { id: Date.now(), ...<%= h.changeCase.camel(name) %>Data }
    return <%= h.changeCase.camel(name) %>
  }
}
