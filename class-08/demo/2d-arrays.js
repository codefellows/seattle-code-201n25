'use strict';

let numberArray = [
  // 0,0   0,1.  0,2
  [1900, 1920, 1929],
  // 1,0 1,1.  1,2
  [1894, 1921, 1965],
  // 2,0. 2,1. 2,2
  [1925, 1946, 2014],
  [1920, 1940, 1984]
];

/*
0,0
1,0
2,0
0,1
1,1
2,1
0,2
1,2
2,2

*/

//console.log(numberArray[1]);

for (let i = 0; i < numberArray[i].length; i++) {
  for (let j = 0; j < numberArray.length; j++) {
    console.log(`numberArray[${j}][${i}]: `, numberArray[j][i]);
  }
}
