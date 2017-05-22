
var bigInt = require("big-integer");


var total = bigInt(2).pow(16 * 16),

// milliseconds per year
msPerYear = 365 * 24 * 60 * 60 * 1000,

// approx number of milliseconds that have passed sense the Earth began to form
deepMS = bigInt('4500000000').multiply(msPerYear),

// the number of milliseconds that have passed sense 1970
relativeMS = new Date(0);

console.log( 'total  : ' + total.toString() );
console.log( 'passed : ' + deepMS.toString() );
console.log(relativeMS.setUTCDate());