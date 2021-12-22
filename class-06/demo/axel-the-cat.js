'use strict';

// DATATYPES
/*
  strings
  boolean (true or false)
  null
  undefined
  number
  arrays
  object!!!!
*/

const axelArray = [
  'Axel',
  'male',
  5,
  'yellow tabby',
  true,
  true,
];

// This is an 'object literal'
let axelObject = {
  name: 'Axel',
  age: 5,
  sex: 'male',
  breed: 'yellow tabby',
  vaccinated: {
    distemper: true,
    rabies: true,
    felv: false
  },
  favToys: [
    'lazer pointer',
    'stuffed mouse'
  ],
  spayNeuter: true,
  // hungry: prompt('Are you hungry?'),
  speak: function() {
    console.log(`meow! My name is ${this.name}.`);
  },
  log: function(message) {
    console.log(message);
  },
};

console.log(axelArray[0]);
console.log(axelObject.name);
console.log(axelObject['name']);

axelObject.weight = 10;
console.log(axelObject);

console.log(axelArray.length);

// console.log(axelObject.hungry);

axelObject.speak();

console.log(typeof console);

axelObject.log('meow!!!');

console.log(`My cat's name is ${axelObject.name}`);
