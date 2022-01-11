'use strict';

// DOM Level 2 Event Handers


const element = document.getElementById('table');

function functionName() {
  // code here
}

element.addEventListener('typeOfEvent', functionName);


// Callback functions:
// Functions passed as arguments into other functions

// from Modzilla:
function greeting(name) {
  console.log('Hello ' + name);
}
function processUserInput(callback) {
  let name = prompt('Please enter your name.');
  // callback function: a function passed into another function
  callback(name);
  // helper function: A function called by name in another function
  greeting(name);
}

processUserInput(greeting);
