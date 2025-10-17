---
to: src/modules/<%= name %>/<%= h.changeCase.camel(name) %>Controller.ts
---
import { Hono } from 'hono'
import { container } from '../../core/di-container'
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>Service'

export const <%= h.changeCase.camel(name) %>Controller = new Hono()

<%= h.changeCase.camel(name) %>Controller.get('/', async (c) => {
  const <%= h.changeCase.camel(name) %>Service = container.resolve<<%= h.changeCase.pascal(name) %>Service>('<%= h.changeCase.pascal(name) %>Service')
  const <%= name %> = await <%= h.changeCase.camel(name) %>Service.get<%= h.changeCase.pascal(name) %>()
  return c.json({ <%= name %> })
})

<%= h.changeCase.camel(name) %>Controller.post('/', async (c) => {
  const <%= h.changeCase.camel(name) %>Service = container.resolve<<%= h.changeCase.pascal(name) %>Service>('<%= h.changeCase.pascal(name) %>Service')
  const <%= h.changeCase.camel(name) %>Data = await c.req.json()
  const <%= h.changeCase.camel(name) %> = await <%= h.changeCase.camel(name) %>Service.create<%= h.changeCase.pascal(name) %>(<%= h.changeCase.camel(name) %>Data)
  return c.json(<%= h.changeCase.camel(name) %>, 201)
})
