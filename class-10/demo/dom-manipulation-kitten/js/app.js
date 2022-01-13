'use strict';

const profileContainer = document.getElementById('kittenProfiles');
const kittenTable = document.querySelector('tbody');

const kittenForm = document.querySelector('form');

let kittenArray = [];

function createNewElement(newEl, textContent, parentEl) {
  let newElement = document.createElement(newEl);
  newElement.textContent = textContent;
  parentEl.appendChild(newElement);
}

function Kitten(name, about, like, src) {
  this.name = name;
  this.about = about;
  this.cutenessIndex = 10;
  this.like = like;
  this.src = src;
  this.listId = `${this.name}Likes`;
  kittenArray.push(this);
}

Kitten.prototype.render = function () {
  // 1.) create element
  let article = document.createElement('article');

  // 2. or 3.) give it content
  // 2. or 3.) append it to the DOM
  profileContainer.appendChild(article);

  // h3
  createNewElement('h3', this.name, article);
  // p
  createNewElement('p', this.about, article);

  // ul
  let ul = document.createElement('ul');
  ul.id = this.listId;
  article.appendChild(ul);

  // img
  let img = document.createElement('img');
  img.src = this.src;
  img.alt = this.about;
  article.appendChild(img);

  this.renderList();
};

Kitten.prototype.renderList = function () {
  const kittenLikes = document.getElementById(this.listId);
  for (let i = 0; i < this.like.length; i++) {
    // li
    let message = `${this.name} likes ${this.like[i]}`;
    createNewElement('li', message, kittenLikes);
  }
  // console.log(kittenLikes.innerHTML);
  kittenLikes.innerHTML = '';
};

Kitten.prototype.renderTableRow = function () {
  let tr = document.createElement('tr');
  kittenTable.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);
  for (let i = 0; i < this.like.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.like[i];
    tr.appendChild(td);
  }
};

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);
  let kittenName = event.target.kittenName.value;
  let about = event.target.about.value;
  let ageInMonths = +event.target.ageInMonths.value;
  console.log(typeof ageInMonths);
  let imageURL = event.target.imageURL.value;
  let likesArray = [
    event.target.fav1.value,
    event.target.fav2.value,
    event.target.fav3.value
  ];
  let newKitten = new Kitten(
    kittenName,
    about,
    likesArray,
    imageURL
  );
  newKitten.render();
  newKitten.renderTableRow();
  kittenForm.reset();
}

new Kitten(
  'Jumper',
  'Jumper the cat is super sweet!',
  ['cuddling', 'lazer pointer', 'cat nap'],
  'images/jumper.jpeg'
);

new Kitten(
  'Serena',
  'Serena is a sweet kitty',
  ['string', 'feathers', 'soft beds'],
  'images/serena.jpeg'
);

new Kitten(
  'Frankie',
  'Frankie is available for adoption',
  ['naps', 'treats', 'cat tree'],
  'images/frankie.jpeg'
);


// Invoke the render and renderTableRow method on all the kittens in the array:

for (let i = 0; i < kittenArray.length; i++) {
  kittenArray[i].render();
  kittenArray[i].renderTableRow();
}

kittenForm.addEventListener('submit', handleSubmit);
