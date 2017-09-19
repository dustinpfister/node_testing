var _ = require('lodash');


console.log(new Array(8).fill(1)); // [1,1,1,1,1,1,1,1]
console.log(  _.fill(new Array(8),1)  );