'use strict';

// declare the function
// "name" is parameter (we declare functions with parameters)
function birthdayGreeting(name, age, cakeFlavor, from = 'the staff at Dunder Mifflin') {
  console.log(`Happy Birthday ${name}! We're putting ${age} candles on your ${cakeFlavor} cake. Best wishes from ${from}.`);
  // return `${name}, you are the best!`;
}

// call/invoke the function:
// "Pam" is an argument (We invoke functions with arguments).
birthdayGreeting('Pam', 30, 'red velvet');
birthdayGreeting('Jim', 30, 'vanilla', 'Pam');
birthdayGreeting('Michael', 43, 'chocolate');
birthdayGreeting('Dwight', 55, 'beat');

// Another way to write a function
let birthdayGreetingAnotherWay = function() {
  console.log('Happy Birthday 2');
};
// This type of function can only be called after the declaration:
birthdayGreetingAnotherWay();

// returning a value in a function
// like "break" "return" will stop a function

function greetingReturningAValue(name) {
  let message = `${name}, you are the greatest!`;
  return message;
}

let returnedMessage = greetingReturningAValue('Pam');
console.log(returnedMessage);
