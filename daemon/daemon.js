/*
 * 创建守护进程
 * @Author slashhuang
 * 参考资料
 *  https://cnodejs.org/topic/57adfadf476898b472247eac#58dce6e9b3e60b982d089d47
 */

const  spawn = require('child_process').spawn;
const path = require('path');
const fd_child = path.resolve(__dirname,'b.js')
/*
 * Nodejs中setsid的调用
 * 在 spawn 的第三个参数中，可以设置 detached 属性，
 * 如果该属性为true，则会调用 setsid 方法。这样就满足我们对守护进程的要求。
 */
const p = spawn('node',[fd_child],{
    detached : true,
    stdio: 'ignore'
});

//25465 25467
console.log(process.pid, p.pid);

//top | grep 25467
p.unref()

