'use strict';

const profileContainer = document.getElementById('kittenProfiles');
const kittenTable = document.querySelector('table tbody');

let jumper = {
  name: 'Jumper',
  about: 'Jumper the cat is super sweet!',
  cutenessIndex: 10,
  like: [
    'cuddling',
    'lazer pointer',
    'cat nap'
  ],
  render: function () {
    for (let i = 0; i < this.like.length; i++) {
      // li
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      ul.appendChild(li);
    }
  }
};

jumper.renderTableRow = function () {
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
jumper.renderTableRow();

// 1.) create element
let article = document.createElement('article');

// 2. or 3.) give it content
// 2. or 3.) append it to the DOM


// h3
let h3 = document.createElement('h3');
h3.textContent = 'Jumper';
article.appendChild(h3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper the cat is super sweet!';
article.appendChild(p);

// ul
let ul = document.createElement('ul');
article.appendChild(ul);

jumper.render();

// img
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = 'Jumper the cat is super sweet!';
article.appendChild(img);

profileContainer.appendChild(article);

