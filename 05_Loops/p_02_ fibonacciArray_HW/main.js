"use strict";
let nr1 = 0;
let nr2 = 1;
let temp;

let fibonnacciArray = [];

while (fibonnacciArray.length < 25) {
  fibonnacciArray.push(nr1);
  temp = nr1 + nr2; // 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
  nr1 = nr2; // 1, 1, 2, 3, 5, 8 , 13, 21, 34, ...
  nr2 = temp; // 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
}
console.log(fibonnacciArray);
