'use strict';

// Steps to adding an event listener
// 1) target a DOM element:
const container = document.getElementById('container');
const parentEl = document.getElementById('results');

// 3 Call back function

let handleClick = function(event) {
  console.log(event.target.id);
  if (event.target.id === 'box-one') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    pEl.className = 'class-I-am-adding';
    parentEl.append(pEl);
  } else if (event.target.id === 'box-two') {
    let pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    pEl.setAttribute('class', 'class-I-am-adding');
    parentEl.append(pEl);
  } else if (event.target.id === 'box-three') {
    let pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    pEl.id = 'IAddedAnID';
    parentEl.appendChild(pEl);
  } else {
    let pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
};






// 2 Add the event listner:

container.addEventListener('click', handleClick);
