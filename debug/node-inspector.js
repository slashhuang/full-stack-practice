/*
 * @Author slashhuang
 * node-inspector
 * debug面板
 * https://github.com/node-inspector/node-inspector
 * 17/3/28
 */

const http = require('http');
console.log('fuck')
http.createServer((req,res)=>{
	debugger;
	res.end('10000')
}).listen(3000,()=>{
	console.log('server listen on port 3000')
})

