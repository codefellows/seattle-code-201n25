'use strict';

const profileContainer = document.getElementById('kittenProfiles');
const kittenTable = document.querySelector('table tbody');

let kittenArray = [];

function Kitten(name, about, like, src) {
  this.name = name;
  this.about = about;
  this.cutenessIndex = 10;
  this.like = like;
  this.src = src;
  this.listId = `${this.name}Likes`;
  this.render = function () {
    // 1.) create element
    let article = document.createElement('article');

    // 2. or 3.) give it content
    // 2. or 3.) append it to the DOM
    profileContainer.appendChild(article);

    // h3
    let h3 = document.createElement('h3');
    h3.textContent = this.name;
    article.appendChild(h3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about;
    article.appendChild(p);

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
  this.renderList = function () {
    const kittenLikes = document.getElementById(this.listId);
    for (let i = 0; i < this.like.length; i++) {
      // li
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      kittenLikes.appendChild(li);
    }
  };
  kittenArray.push(this);
}

// Kitten(name, about, like, src)
// let jumper = new Kitten(
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
//console.log(kittenArray);

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

// frankie.render();
// jumper.render();
// serena.render();

// jumper.renderTableRow();
// frankie.renderTableRow();
// serena.renderTableRow();

for (let i = 0; i < kittenArray.length; i++) {
  kittenArray[i].render();
  kittenArray[i].renderTableRow();
}

// let jumper = {
//   name: 'Jumper',
//   about: 'Jumper the cat is super sweet!',
//   cutenessIndex: 10,
//   like: [
//     'cuddling',
//     'lazer pointer',
//     'cat nap'
//   ],
//   src: 'images/jumper.jpeg',
//   listId: `${this.name}Likes`,
//   render: function () {
//     // 1.) create element
//     let article = document.createElement('article');

//     // 2. or 3.) give it content
//     // 2. or 3.) append it to the DOM
//     profileContainer.appendChild(article);

//     // h3
//     let h3 = document.createElement('h3');
//     h3.textContent = this.name;
//     article.appendChild(h3);

//     // p
//     let p = document.createElement('p');
//     p.textContent = this.about;
//     article.appendChild(p);

//     // ul
//     let ul = document.createElement('ul');
//     ul.id = this.listId;
//     article.appendChild(ul);

//     // img
//     let img = document.createElement('img');
//     img.src = this.src;
//     img.alt = this.about;
//     article.appendChild(img);

//     this.renderList();
//   },
//   renderList: function () {
//     const kittenLikes = document.getElementById(this.listId);
//     for (let i = 0; i < this.like.length; i++) {
//       // li
//       let li = document.createElement('li');
//       li.textContent = `${this.name} likes ${this.like[i]}`;
//       kittenLikes.appendChild(li);
//     }
//   },
// };
