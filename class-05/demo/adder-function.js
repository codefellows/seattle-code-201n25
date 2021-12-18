'use strict';

let numbers = [3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [7, 4, 6, 9];
// function that takes in an array
// adds the first 3 items
// returns a different array with two elements (indexs)
// 0. a message
// 1. the sum of the 3 items

function adder(array) {
  let sum = array[0] + array[1] + array[2];
  let message = `our sum is ${sum}.`;
  return [message, sum];
}

let result1 = adder(numbers)[1];
let result2 = adder(numbers2)[1];
console.log(result1);
console.log(result2);

let total = result1 + result2;
console.log(total);
console.log(typeof total);
