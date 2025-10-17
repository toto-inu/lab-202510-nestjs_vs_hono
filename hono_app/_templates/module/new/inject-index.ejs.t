---
to: src/index.ts
inject: true
after: "import { loggingMiddleware } from './core/middleware/loggingMiddleware.js'"
---
import { <%= h.changeCase.camel(name) %>Controller } from './modules/<%= name %>/index.js'