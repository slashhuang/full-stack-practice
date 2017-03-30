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

/*-----------  Method ----------*/
const buf_1 = Buffer.from('1234');
const buf_2 = Buffer.from('0123');
const arr = [buf_1, buf_2];
// 1
console.log(Buffer.compare(buf_1,buf_2))
// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
console.log(arr.sort(Buffer.compare));

const totalLength = buf_2.length + buf_1.length;
const buf_cat = Buffer.concat([buf_2,buf_1], totalLength);
//<Buffer 30 31 32 33 31 32 33 34>
console.log(buf_cat)


const buf_from = Buffer.from(buf_1);
buf_from[0] = 0x61;
// Prints: 1234
console.log(buf_1.toString());
// Prints: a1234
console.log(buf_from.toString());
//[0,97] [1,50]等
for(const pair of buf_from.entries()){
    console.log(pair)
}














