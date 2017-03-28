## http.createServer((requset,response)=>res.end())对象分解

> 基于事件模型的Node.js应用

```javascript
    let fn = (req,res)=>res.end();
    let server = http.createServer(fn)
```

> 如上代码很容易让众多Node开发者形而上学认为这样work就ok，而忽略它的本质。

> 实际上上面的代码等价于

```javascript
    let fn = (req,res)=>res.end();
    let server = http.createServer()
    server.on('request',fn)
```

> 上篇专栏文章，我分享了如何采用[Symbol来实现Promise](https://zhuanlan.zhihu.com/p/26003835),可能写的有些晦涩。

> 今天这篇文章不采用代码模式来分享Node知识。

> 我把request和response对象按照tree的结构展示了http_out_going、stream、eventEmitter等的继承关系。

> 文章张文即为request和response对象的树状数据结构，数据结构中我只展示了public方法，私有方法并未列出。

> 这篇文章的受众是有Node开发经验的读者。

## request对象
```bash
> request对象实现了Readable Stream的接口

|- IncomingMessage
|- |- client
|- |- socket (客户端和server的request socket)
|- |- connection
|- |
|- |- headers
|- |- |- accept:'*/*'
|- |- |- host:'localhost:7000'
|- |- |- user-agent:'curl/7.43.0'
|- |
|- |- httpVersion:"1.1"
|- |
|- |- upgrade: false
|- |- url:"/"
|- |
|- |- |- 原型链 Readable
|- |- |-
|- |- |- constructor: Readable(options)
|- |- |- destroy(error)
|- |- |- read(n)
|- |- |- setTimeout(msecs, callback)
|- |- |
|- |- |- |- 原型链 Stream
|- |- |- |- addListener(event,fn)
|- |- |- |- on(event,fn)
|- |- |- |- pipe(dest, pipeOpts)
|- |- |- |- pause()
|- |- |- |- push(chunk, encoding)
|- |- |- |- read(n)
|- |- |- |- resume()
|- |- |- |- setEncoding(enc)
|- |- |- |- unpipe(dest)
|- |- |- |- unshift(chunk)
|- |- |- |- wrap(stream)
|- |- |- |
|- |- |- |- 原型链 EventEmitter
|- |- |- |- |- addListener(event,fn)
|- |- |- |- |- on(type, listener)
|- |- |- |- |- once(type, listener)
|- |- |- |- |- emit(type)
|- |- |- |- |- getMaxListners()
|- |- |- |- |- listenerCount(type)
|- |- |- |- |- listeners(type)
|- |- |- |- |- prependListener(type,listener)
|- |- |- |- |- prependOnceListener(type,listener)
|- |- |- |- |- removeAllListeners(type)
|- |- |- |- |- removeListener(type,listener)
|- |- |- |- |- setMaxListener(n)

```
## response

> response对象实现了Writable Stream的接口，但它并未继承Writable Stream

```bash
|- ServerResponse
|- |- socket (客户端和server的request socket)
|- |- connection
|- |
|- |- _headers:null
|- |
|- |- chunkEncoding:false
|- |
|- |- upgrading: false
|- |
|- |- useChunkedEncodingByDefault:true
|- |
|- |- writable:true
|- |
|- |- |- 原型链 OutgoingMessage
|- |- |
|- |- |- constructor: OutgoingMessage
|- |- |- writeHead(statusCode,reason,obj)
|- |- |- writeHeader()
|- |- |- writeContinue(cb)
|- |- |- statusCode:200
|- |- |- statusMessage:undefined
|- |- |- writeContinue(cb)
|- |- |
|- |- |- 原型链 Stream
|- |- |- |- addTrailers(headers)
|- |- |- |- destroy(error)
|- |- |- |- end(data, encoding, callback)
|- |- |- |- write(chunk, encoding, callback)
|- |- |- |- flush()
|- |- |- |- flushHeaders()
|- |- |- |- headerSent
|- |- |- |- removeHeader(name)
|- |- |- |- setHeader(name,value)
|- |- |- |- setTimeout(msecs, callback)
|- |- |- |- pipe(dest,options)
|- |- |- |
|- |- |- |- 原型链 EventEmitter
|- |- |- |- |- addListener(event,fn)
|- |- |- |- |- on(type, listener)
|- |- |- |- |- once(type, listener)
|- |- |- |- |- emit(type)
|- |- |- |- |- getMaxListners()
|- |- |- |- |- listenerCount(type)
|- |- |- |- |- listeners(type)
|- |- |- |- |- prependListener(type,listener)
|- |- |- |- |- prependOnceListener(type,listener)
|- |- |- |- |- removeAllListeners(type)
|- |- |- |- |- removeListener(type,listener)
|- |- |- |- |- setMaxListener(n)
```
# 结语

> 读者如果想实践上面列出的继承关系，可以戳这个[github response](https://github.com/slashhuang/full-stack-practice)

> 如有理解错误，请在评论区指出





