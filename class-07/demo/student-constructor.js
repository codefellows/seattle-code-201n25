'use strict';

// let oneStudent = {
//   name: 'Steve',
//   codeClass: 201,
//   pronouns: 'he, him',
//   onLine: true,
//   render: function() {
//     /// do stuff
//   }
// };

// console.log(oneStudent);

// let twoStudent = {
//   name: 'Steve',
//   codeClass: 201,
//   pronouns: 'he, him',
//   onLine: true,
//   render: function() {
//     /// do stuff
//   }
// };

let studentArray = [];

// Declare constructor function
//
function Student(name, pronouns, codeClass) {
  this.StudentName = name;
  this.pronouns = pronouns;
  this.onLine = true;
  this.codeClass = codeClass;
  this.introduce = function() {
    console.log(`Hi, my name is ${this.StudentName}. My pronouns are ${this.pronouns} and I am in the ${this.codeClass} class.`);
  };
  studentArray.push(this);
}

// create "instances" of student:
// This is called "instanciating"
let steve = new Student('Steve', 'he, him', 201);
//console.log(steve);
let juan = new Student('Juan', 'he, him', 201);
//console.log(juan);
let sara = new Student('Sara', 'she, her', 201);
//console.log(sara);

// steve.introduce();
// sara.introduce();
// juan.introduce();


// for (let i = 0; i < studentArray.length; i++) {
//   studentArray[i].introduce();
// }
//
Student.prototype.hairColor = 'black';
console.log(sara.hairColor);
console.log(juan.hairColor);
console.log(steve.hairColor);
// sara.hairColor = 'Blond';
// console.log(sara.hairColor);

Student.prototype.sayHi = function() {
  console.log('hi');
};
// sara.sayHi();
// juan.sayHi();
