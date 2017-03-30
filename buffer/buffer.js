/*
 * 关于buffer
 * @Author slashhuang
 */
// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
//<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf1);

// Creates a Buffer of length 10, filled with 0x1.
const buf2 = Buffer.alloc(10, 1);
//<Buffer 01 01 01 01 01 01 01 01 01 01>
console.log(buf2)

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);
//<Buffer 01 02 03>
console.log(buf4)


/*-----------  Encoding ----------*/
const buf5 = Buffer.from('test');
//test
console.log(buf5.toString('utf8'))

// encoding互换
const bufEnc1 = Buffer.from('hello world', 'ascii');
console.log(bufEnc1.toString('ascii'))

/*-----------  Iteration ----------*/
const bufArr = Buffer.from([1,2,3]);
// print 1,2,3
for(const b of bufArr){
    console.log(b)
}