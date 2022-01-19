'use strict';

// global variables

let goatArray = [];
let counter = 0;
let counterMaxValue = 15;
let indexArray = [];

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
  // maybe use an array here??????
  // how do you know if an array includes something????????
  // Google it
  while (indexArray.length < 4) {
    let randomNumber = selectRandomGoat();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }
  console.log(indexArray);

  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();

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
    renderChart();
  } else {
    renderGoats();
  }
}

function renderChart() {
  let goatNames = [];
  let goatLikes = [];
  let goatViews = [];
  for (let i = 0; i < goatArray.length; i++) {
    // get the name, likes, views for each goat
    goatNames.push(goatArray[i].name);
    goatLikes.push(goatArray[i].likes);
    goatViews.push(goatArray[i].views);
  }
  console.log(goatNames);
  const data = {
    labels: goatNames,
    datasets: [{
      label: '# of Views',
      data: goatViews,
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1
    },
    {
      label: '# of like/clicks',
      data: goatLikes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  const chart = document.getElementById('myCanvas');
  const myChart = new Chart(chart, config);
}

// code that runs on page load:

new Goat('cruisin-goat', 'png');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');
console.log(goatArray);

renderGoats();

myContainer.addEventListener('click', handleClick);
