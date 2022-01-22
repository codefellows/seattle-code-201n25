// a local coffee shop wants your help to build a simple application they can use to record customer orders and maintain a record of what has been ordered (for any period of any amount of time).

// create a very simple app that has two components
// -- a way to create an order
//          - form
// -- a way to display the data
//          - lists (ul)

'use strict';

// -------- Global variables-----------//
// Dom elements:
const coffeeForm = document.querySelector('form');
const resultsList = document.querySelector('ul');

let drinkOrders = [];

// -------- Constructor function -----------//

function Drink(name, drinkType, milk, size) {
  this.name = name;
  this.drinkType = drinkType;
  this.milk = milk;
  this.size = size;
}

Drink.prototype.renderADrink = function() {
  let li = document.createElement('li');
  // ex. Sheyna ordered a 12oz tea with whole milk
  li.textContent = `${this.name} ordered a ${this.size}oz ${this.drinkType} with ${this.milk} milk.`;
  resultsList.appendChild(li);
};

// -------- functional logic -----------//

function makeADrink(name, drinkType, milk, size) {
  // create new instance of Drink
  let drinkObj = new Drink(name, drinkType, milk, size);
  // push the new drink instance to drink array
  drinkOrders.push(drinkObj);
  // render the drink to the DOM
  drinkObj.renderADrink();
}

function storeDrink() {
  // "orders" is our KEY
  let stringifiedOrders = JSON.stringify(drinkOrders);
  localStorage.setItem('orders', stringifiedOrders);
}

function getDrinks() {
  // check if there are drinks (orders) in storage
  // if there are no orders potentialOrders will be null
  let potentialOrders = localStorage.getItem('orders');
  if (potentialOrders) {
    // if so do something with them
    let parsedOrders = JSON.parse(potentialOrders);
    // Run it back through the constructor function — Reinstantiate
    for (let order of parsedOrders) {
      let name = order.name;
      let drinkType = order.drinkType;
      let milk = order.milk;
      let size = order.size;
      makeADrink(name, drinkType, milk, size);
    }
  }
  // is not do?
}

// -------- Event handler -----------//
// submit form:
function handleSubmit(e) {
  e.preventDefault();
  // get info from form;
  let customerName = e.target.name.value;
  let drinkType = e.target.drink.value;
  let milk = e.target.milk.value;
  let size = e.target.drinkSize.value;
  // use the data from the form to create an instance of Drink:
  makeADrink(customerName, drinkType, milk, size);
  storeDrink();
  coffeeForm.reset();
}

// -------- Event listener -----------//
coffeeForm.addEventListener('submit', handleSubmit);
getDrinks();
