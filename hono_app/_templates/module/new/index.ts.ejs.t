---
to: src/modules/<%= name %>/index.ts
---
export { <%= h.changeCase.camel(name) %>Controller } from './<%= h.changeCase.camel(name) %>Controller'
export { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>Service'
