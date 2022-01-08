'use strict';

// 1.) Target an element

const myForm = document.querySelector('form');


// 3.) Declare a Callback function

function handleSubmit(event) {
  event.preventDefault();
  let firstName = event.target.nameFirst.value;
  let lastName = event.target.nameLast.value;
  let numberOfPets = event.target.numberOfPets.value;
  console.log(firstName, lastName);
  console.log(numberOfPets);
}


// 2.) add the event listener

myForm.addEventListener('submit', handleSubmit);
