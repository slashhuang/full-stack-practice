/**
 * Much of the Node.js core API is built around
 * an idiomatic asynchronous event-driven architecture
 * in which certain kinds of objects (called "emitters") periodically emit named events
 * that cause Function objects ("listeners") to be called.
 * @Author slashhuang
 * 17/3/28
 */

// 简单的pub/sub api
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');

/*
 * 静态方法
 * 监听队列长度 api
 * EventEmitter.listenerCount(emitter, eventName)
 */