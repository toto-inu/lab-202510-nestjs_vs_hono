---
to: src/modules/<%= name %>/<%= h.changeCase.camel(name) %>Controller.ts
---
import { Hono } from 'hono'
import type { HonoEnv } from '../../core/types.js'
import { TYPES } from '../../core/types.js'
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>Service.js'

export const <%= h.changeCase.camel(name) %>Controller = new Hono<HonoEnv>()

<%= h.changeCase.camel(name) %>Controller.get('/', async (c) => {
  const container = c.get('container')
  const <%= h.changeCase.camel(name) %>Service = container.get<<%= h.changeCase.pascal(name) %>Service>(TYPES.<%= h.changeCase.pascal(name) %>Service)
  const <%= name %> = await <%= h.changeCase.camel(name) %>Service.get<%= h.changeCase.pascal(name) %>()
  return c.json({ <%= name %> })
})

<%= h.changeCase.camel(name) %>Controller.post('/', async (c) => {
  const container = c.get('container')
  const <%= h.changeCase.camel(name) %>Service = container.get<<%= h.changeCase.pascal(name) %>Service>(TYPES.<%= h.changeCase.pascal(name) %>Service)
  const <%= h.changeCase.camel(name) %>Data = await c.req.json()
  const <%= h.changeCase.camel(name) %> = await <%= h.changeCase.camel(name) %>Service.create<%= h.changeCase.pascal(name) %>(<%= h.changeCase.camel(name) %>Data)
  return c.json(<%= h.changeCase.camel(name) %>, 201)
})
