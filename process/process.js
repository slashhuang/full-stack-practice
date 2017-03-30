/*
 * process 对象
 * @Author slashhuang
 * 17/3/30
 */

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
    process.stdin.emit('end')
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

console.log('testing')