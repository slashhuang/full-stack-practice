## stream in Node.js

> Almost all Node.js applications,no matter how simple, use streams in some manner.

## 核心理念: 用来处理流式数据的接口

> A stream is an abstract interface
> for working with streaming data in Node.js
> Not all  streams will emit the 'close' event

## 继承关系:

> Streams can be readable, writable, or both.
> All streams are instances of EventEmitter.

## Stream四大基础类型

> Readble :例子fs.createReadStream()

> Writable:例子fs.createWriteStream()

> Duplex =>both readablea and writable :例子 net.Socket

> Transform:=>Duplex stream 能够不断在读写过程中修改:例子zlib.createDeflate

## Stream数据模型

- highWaterMark:  stream容量

- internal buffer: stream暂存区


## Stream api结构

|- Writable Streams
|- |- EVENTS
|- |- |- close
|- |- |- drain
|- |- |- error
|- |- |- finish
|- |- |- pipe
|- |- |- unpipe
|- |- |
|- |- Methods
|- |- |- end([chunk][, encoding][, callback])
|- |- |- cork
|- |- |- setDefaultEncoding(encoding)
|- |- |- uncork()
|- |- |- write(chunk[, encoding][, callback])


|- Readable Streams
|- |- MODES
|- |- |- flow mode
|- |- |- pause mode
|- |- |
|- |- state
|- |- |- _readableState.flowing = null
|- |- |- _readableState.flowing = false
|- |- |- _readableState.flowing = true
|- |- |
|- |- EVENTS
|- |- |- close
|- |- |- data
|- |- |- end
|- |- |- error
|- |- |- readable
|- |- |
|- |- Methods
|- |- |- isPaused()
|- |- |- pause()
|- |- |- pipe(destination[, options])
|- |- |- read([size])
|- |- |- resume()
|- |- |- setEncoding(encoding)
|- |- |- pipe(destination[, options])
|- |- |- unpipe([destination])
|- |- |- unshift(chunk)








