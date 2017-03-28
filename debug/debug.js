/*
 * @Author slashhuang
 * 采用debug模块优化日志命名空间
 * 17/3/28
 */


// debug模块
const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

// fake app
debug('booting %s', name);

http.createServer((req, res)=>{
  debug(`${req.method} ${ req.url}`);
  res.end('hello');
}).listen(3000, ()=>{
  debug('listening');
});

// fake worker of some kind
const worker = require('debug')('worker');
setInterval(()=>{
  worker('doing some work');
}, 1000);