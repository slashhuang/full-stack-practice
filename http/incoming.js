/*
 * incoming message for http `request` event handler 1st argument
 * @Author slashhuang
 * 17/3/28
 * 特别说明 -----
 * 对于我们起的Node服务地位是server还是client
 * incomingMessage分别对应着事件`request`,`response`
 * 这里 -----
 * 我只列举request事件的情形
 */


 /*
  * 实现接口来自于readable Stream
  * interface:[Readable Stream](https://github.com/nodejs/node/blob/master/doc/api/stream.md#stream_class_stream_readable)
  */
const http = require('http');
const server = http.createServer((req,res)=>{
    propertyHook(req)
    EventHook(req);
    methodHook(req)
    res.on('error',()=>{
        console.log(`error happened`)
    })
    setTimeout(()=>res.end('1'),2000)
});
server.listen(7000);
 /*
  * events
  * - aborted 触发时机: 客户端停止请求+socket连接关闭
  * - close 触发时机: 一个请求触发一次
  */
const EventHook = req=>{
    // socket层面
    req.on('aborted',()=>{
        console.log(`client req aborted`)
    }).on('close',()=>{
        console.log(`response done for once`)
    })
    /*
     * Calls destroy() on the socket that received the IncomingMessage
     * 关闭客户端和server端 socket
     */
    // req.destroy('fuck')
}

 /*
  *  properties.
  * - headers: The request/response headers object. ==> return object
  * - httpVersion ==> return string
  * - method  ==> return string
  * - rawHeaders ==> return array
  * - socket  ==> return {net.Socket}
  * - url
  *
  */
  const propertyHook = req=>{
        console.log(req.rawHeaders);
        //增加socket的error监听。触发顺序 error => aborted => close
        req.socket.on('error',()=>console.log('error'))
   }
 /*
  * methods, and properties.
  * - setTimeout(msecs, callback) :message.connection.setTimeout(msecs, callback).
  *      return message
  *
  */
  const methodHook = req=>{
        //在req的socket,connection建立连接
        req.setTimeout(1000,()=>{
            console.log('timeout for 1000')
        })
  };














