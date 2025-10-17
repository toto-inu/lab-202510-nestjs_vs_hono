---
to: src/index.ts
inject: true
after: "app.route('/api/posts', postController)"
---
app.route('/api/<%= name %>', <%= h.changeCase.camel(name) %>Controller)