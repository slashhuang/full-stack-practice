/*
 * http.ServerResponse
 * It is passed as the second parameter to the 'request' event
 * @Author slashhuang
 * 17/3/28
 * The response implements, but does not inherit from, the Writable Stream interface
 */

 /*
  * 实现接口来自于 Writable Stream
  * interface:[Writable Stream](https://github.com/nodejs/node/blob/master/doc/api/stream.md#stream_class_stream_writable)
  */
const http = require('http');
const server = http.createServer((req,res)=>{
    propertyHook(res)
    EventHook(res);
    methodHook(res)
});
server.listen(7000);
 /*
  * events
  * - close
        Indicates that the underlying connection was terminated before response.end()
  * - finish 触发时机: 响应返回，这是response最后触发的事件
  */
const  EventHook = res=>{
    res.on('close',()=>{
        //示例case:客户端在手动kill socket的时候，比如ctrl+c执行curl,
        console.log('response terminated')
    }).on('finish',()=>{
        console.log('response sent done')
    })
};
/*
  * methods,
  * - addTrailers(headers) :
        adds HTTP trailing headers (a header but at the end of the message) to the response.
  *      return message
  * - end([data][, encoding][, callback])
  *   每个请求必须调用，是write(data,encoding)+ res.end(callback)的facade
  * - write(chunk[, encoding][, callback])
  * - writeHead(statusCode[, statusMessage][, headers])
  * - getHeader(name)
  *   读取queued header
  * - removeHeader(name)
  *     Removes a header that's queued for implicit sending.
  * - setHeader(name, value)
  * - writeHead(statusCode,message,headers)
  */
  const methodHook = response=>{
        //读取queued header
        response.setHeader('Foo', 'bar');
        response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
                console.log(response.getHeader('Foo'));

        response.writeHead(200,'ok',{hello:'world'})
        response.end('hello')
  };
  /*
  * properties,
  * - finished :
          indicates whether the response has completed
  * - statusCode
  * - statusMessage
  */
  const propertyHook =  response=>{
    console.log(response.finished);

  };







