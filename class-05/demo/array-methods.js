'use strict';
// let name = 'john';
// let nums = new Array(10).fill(false);
// console.log(nums);
// nums = new Array(10).fill(true);
// console.log(nums);

// nums.push('banana');
// console.log(nums);

// nums.fill(false);

// console.log(typeof nums);

// console.log(Array.isArray(nums));

// console.log(nums.length);

// let nums = [];

// for( let i = 1; i <= 100; i++ ) {
//   nums.push(i);
// }

// console.log(nums)

// index:        0.       1.      2.      3.     4
let months = ['March', 'April', 'May', 'June', 'July'];

// months[8] = 'November';
console.log(months);
// console.log(months[5]);

//.pop()
// takes the last item off of an array
let poppedItem = months.pop();
console.log(months);
console.log('popped: ', poppedItem);

//.shift()
// takes the first item off of an array
// and reorders all elements after it
let shiftedItem = months.shift();
console.log(months);
console.log('shifted: ', shiftedItem);

//.push()
// adds an item to the end of the array
months.push('July');
console.log(months);

months.push('August', 'September', 'October');
console.log(months);

//.unshift();
// adds an item to the front of the array
// and reorders all elements after it
months.unshift('February');
console.log(months);

//.splice()
//.splice(<start-index>, <number-of-items-to-remove>, <what-to-add-if-anything>)
// .splice() takes at least two arguments, it can take 3.
months.splice(1, 2, 'March', 'April', 'May');
console.log(months);

months.unshift('January');
console.log(months);

months.push('November', 'December');
console.log(months);
