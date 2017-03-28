/*
 * client Request
 * @Author slashhuang
 * 17/3/28
 * 专业术语
 * payload:https://en.wikipedia.org/wiki/Payload_(computing)
 */

/*
 *class: http.Server类
  http.createServer([requestListener])
  Returns: {http.Server}
  The requestListener is a function
  which is automatically added to the 'request' event.
  回调函数自动添加进request事件回调
 */
const http = require('http');
const server = http.createServer((req, res) => {
  res.end();
});
//If a client connection emits an 'error' event, it will be forwarded here
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
/*
 * When a new TCP stream is established.
 * socket is an object of type net.Socket
 */
server.on('connection', socket => {
    console.log(`connection comes in`)
});
/*
 * request {http.IncomingMessage}
 * response {http.ServerResponse}
 * Emitted each time there is a request.
 * Note that there may be multiple requests per connection
 */
server.on('request',(request,response) => {
    let {url,method} = request;
    console.log(`request metadata is ${method} ${url} `);
    // close server
    server.close(()=>process.stdout.write('server closed'));
});
server.listen(8000);








