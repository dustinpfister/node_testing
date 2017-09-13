/*

This one seems redundant

*/

var _ = require('lodash'),
chalk = require('chalk');

var a1 = [1,2,3],
a2 = [4,5,6];

// [1,2,3,4,5,6]
console.log( _.concat(a1,a2) );

// vanilla js can do the same?
// [1,2,3,4,5,6]
console.log( a1.concat(a2) )

var na = _.concat(a1,a2);
var na = a1.concat(a2);

console.log(_.concat([7,8,9],10,11,12));
console.log([7,8,9].concat(10,11,12));