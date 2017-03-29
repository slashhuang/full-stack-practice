/*
 * @Author slashhuang
 * 17/3/29
 * Stream in Node.js
 * Almost all Node.js applications,
 * no matter how simple, use streams in some manner
 */

/* 核心理念: 用来处理流式数据的接口
 * A stream is an abstract interface
 * for working with streaming data in Node.js
 */

/* 继承关系:
 * Streams can be readable, writable, or both.
 * All streams are instances of EventEmitter.
 */
const stream = require('stream');
/* Stream四大基础类型
 * Readble :例子fs.createReadStream()
 * Writable:例子fs.createWriteStream()
 * Duplex =>both readablea and writable :例子 net.Socket
 * Transform:=>Duplex stream 能够不断在读写过程中修改。
 *              :例子zlib.createDeflate
 */


 /* Buffer存储
  * stream在内部由Buffer存储，
  * highWaterMark => Buffer容量
  *
  * ReadableStream :
  *     stream.push(chunk)
  *     => chunk goto buffer
  *     stream.read()
  *     => chunk get consumed
  *
  * 当Buffer的大小>highWaterMark时，
  *    stream将会停止执行readable._read()
  *    直到Buffer被consume至highWaterMark底下
  */

 /* Buffer存储
  * WritableStreams:内部逻辑和Readable一致
  *     writable.write(chunk)
  *     => if < highWaterMark @return true
  *     => if >= highWaterMark @return false
  */

 /* 调节API stream.pipe
  * pipe方法的主要作用在于调节输入输出双方。
  * 当输入和输出的速度不一致时，由pipe来调节双方。
  */

 /* Duplex and  Transform
  * 核心逻辑在于read write两端各自设置Buffer。
  * 两端对buffer的操作彼此独立
  */

//----------------代码实践区域--------------------

/*
 * API for Stream Consumers
 * 测试例子:curl localhost:7000 -d "hello world"
 */
const http = require('http');
http.createServer((req,res)=>{
    let body = ''
    req.on('data',(chunk)=>{
        body+=chunk
    }).on('end',()=>{
        res.end(body)
    })
}).listen(7000)
/*
 * Writable streams 暴露了write/end来写入数据
 * Readable streams 采用EventEmitter来通知数据的读取状态
 *
 * stream状态读取
 * 无论是Readable还是Writable都采用EventEmitter来沟通暴露数据状态
 *
 * 大多数应用的stream读取状态都不需要到require('stream')这一层。
 */
/*
 * writable Stream举例
 * HTTP responses, on the server
 * fs write streams
 * zlib streams
 * crypto streams
 * TCP sockets
 * child process stdin==> stdout && stderr
 */
 /*
 * writable Stream事件
 * - close
 * - drain
 *   stream.write(chunk) returns false,
 *   the 'drain' event will be emitted
 *   when it is appropriate to resume writing data to the stream.
 *
 */
 function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000;
  write();
  function write(message) {
    var ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // 998509-resuming--
        message &&  writer.write(message, encoding)&&console.log(`${i}-${message}`);
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', ()=>write('resuming--'));
    }
  }
};
let fs = require('fs').createWriteStream('./tmp');
writeOneMillionTimes(fs,'hello world','utf8',()=>console.log('done'))


















