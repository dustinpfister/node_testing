var _ = require('lodash');

var arr = [1,2,3,4,5,6],

//newArr = _.drop(arr,3);

newArr = arr.slice(3,arr.length);

// the new Array is what remains
console.log(newArr); // [4,5,6]

// the original array is unchanged
console.log(arr); // [1,2,3,4,5,6]



var arr = [1,2,3,4,5,6],

first = arr.splice(0,1)[0];

// shift returns the first element in the array
console.log(first); // 1

// shift also modifies the array, 
console.log(arr); // [2,3,4,5,6]



/*
console.log(arr.shift());

console.log(arr);
*/


//console.log(_.drop(arr,3));

//console.log(arr);