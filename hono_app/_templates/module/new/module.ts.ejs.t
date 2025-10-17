---
to: src/modules/<%= name %>/<%= h.changeCase.camel(name) %>Module.ts
---
import { Module } from '../../core/module'
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>Service'

@Module({
  providers: [
    {
      token: '<%= h.changeCase.pascal(name) %>Service',
      useClass: <%= h.changeCase.pascal(name) %>Service,
      deps: []
    }
  ]
})
export class <%= h.changeCase.pascal(name) %>Module {}
