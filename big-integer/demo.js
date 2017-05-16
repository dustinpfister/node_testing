var bigInt = require("big-integer");

// plain old JavaScript number
console.log(Math.pow(2,128));
 // 3.402823669209385e+38

// JavaScript number to big int
console.log( bigInt( Math.pow(2,128) ).toString());
// 340282366920938500000000000000000000000

// big int
console.log( bigInt(2).pow(128).toString() );
// 340282366920938463463374607431768211456
