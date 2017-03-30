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

## Buffer存储
> stream在内部由Buffer存储，
> highWaterMark => Buffer容量

-  ReadableStream :

>     stream.push(chunk)
>     => chunk goto buffer
>     stream.read()
>     => chunk get consumed
>

> 当Buffer的大小>highWaterMark时，
>    stream将会停止执行readable._read()

>    直到Buffer被consume至highWaterMark底下

>/

- WritableStreams

> 内部逻辑和Readable一致
>     writable.write(chunk)

>     => if < highWaterMark @return true

>     => if >= highWaterMark @return false

>

- 调节API stream.pipe

> pipe方法的主要作用在于调节输入输出双方。
> 当输入和输出的速度不一致时，由pipe来调节双方。
>

- Duplex and Transform

> 核心逻辑在于read write两端各自设置Buffer。
> 两端对buffer的操作彼此独立


## Stream api结构
```bash

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
|- |- State
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

```






