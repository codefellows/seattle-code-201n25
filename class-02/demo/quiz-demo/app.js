'use strict';

console.log('hi');

/*
  Conditionals

  if (condition) {
    this do this
  }

  ===

  && — the "logical and"
    One false value on either side of && and the statement evaluates to false and the code won't run

  || — the "logical or" (double pipes)
    Either value being true will case the code to run

  ! — the "logical not"
    the opposite value of what it has

*/


let doILikeStrawberries = prompt('Do I like strawberries? Yes or No?').toLowerCase();
console.log(doILikeStrawberries);

// let lowerCaseStrawberries = doILikeStrawberries.toLowerCase();
// console.log(lowerCaseStrawberries);
if (doILikeStrawberries === 'yes' || doILikeStrawberries === 'y') {
  console.log('Yes, I like strawberries');
} else if (doILikeStrawberries === 'no' || doILikeStrawberries === 'n') {
  console.log('No, I do like strawberries');
} else {
  console.log('please answer with a yes or a no');
}

