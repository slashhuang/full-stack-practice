/*
 * http服务
 */

const http = require('http');
const fs =require('fs')

http.createServer((req,res)=>{
    //length 38998
    console.log(req.headers['user-agent'])
    res.end('hello world')
}).listen(3000);
