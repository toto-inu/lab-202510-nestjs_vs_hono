---
to: src/index.ts
inject: true
after: "import './modules/posts/postModule'"
---
import './modules/<%= name %>/<%= h.changeCase.camel(name) %>Module'