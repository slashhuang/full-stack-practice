# full-stack-practice

# http对象相关

- [http IncomingMessage](./http/incoming.js)

- [http ServerResponse](./http/response.js)

- [response/request数据结构](./http/http.md)

# stream对象相关

- [stream知识体系和数据结构](./stream/stream.md)


# 四种debug主流debug模式

1. V8内置的inspect

```bash
	node --inspect `yourcode`
```

2. [node-inspector配合nodemon](./debug/node-inspector.js)

```bash
	npm run inspector
```

3. [原生repl](./debug/repl.js)

```bash
	npm run repl
```

4. [debug模块优化日志](./debug/debug.js)

```bash
	npm run debug
```
