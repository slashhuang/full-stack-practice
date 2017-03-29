/*
 * @Author slashhuang
 * 17/3/29
 * Stream in Node.js
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
















