'use strict';

// global variables

let goatArray = [];
let counter = 0;
let counterMaxValue = 15;

const myContainer = document.querySelector('section');
const myButton = document.querySelector('section + div');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

// functional logic

function Goat(name, fileExtension = 'jpg') {
  this.likes = 0;
  this.views = 0;
  this.name = name;
  this.src = `images/${name}.${fileExtension}`;
  goatArray.push(this);
}

function selectRandomGoat() {
  return Math.floor(Math.random() * goatArray.length);
}

function renderGoats() {
  let goat1 = selectRandomGoat();
  let goat2 = selectRandomGoat();
  // maybe use an array here??????
  // how do you know if an array includes something????????
  // Google it
  while (goat1 === goat2) {
    goat2 = selectRandomGoat();
  }

  image1.src = goatArray[goat1].src;
  image1.alt = goatArray[goat1].name;
  image2.src = goatArray[goat2].src;
  image2.alt = goatArray[goat2].name;
  goatArray[goat1].views++;
  goatArray[goat2].views++;
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }
  counter++;
  // find out what image was clicked on
  let goatClicked = event.target.alt;
  // increment likes on that goat
  // Google better way?
  for (let i = 0; i < goatArray.length; i++) {
    if (goatClicked === goatArray[i].name) {
      goatArray[i].likes++;
      break;
    }
  }
  // render new goats on the page
  if (counter === counterMaxValue) {
    // stop the game
    myContainer.removeEventListener('click', handleClick);
    myButton.className = 'clicks-allowed';
    myButton.addEventListener('click', handleButtonClick);
  }
  renderGoats();
}

function handleButtonClick() {
  if (counter === counterMaxValue) {
    renderResults();
  }
}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < goatArray.length; i++) {
    let message = `${goatArray[i].name} had ${goatArray[i].views} views amd was clicked on ${goatArray[i].likes} times`;
    let li = document.createElement('li');
    li. textContent = message;
    ul.appendChild(li);
  }
}

// code that runs on page load:

new Goat('cruisin-goat', 'png');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');


renderGoats();

myContainer.addEventListener('click', handleClick);
