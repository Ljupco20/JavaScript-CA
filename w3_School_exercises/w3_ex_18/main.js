"use strict";

///////////////////////////////////////////////////////////

function twoNum(num1, num2) {
  // if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}
console.log(twoNum(5, 5));
console.log(twoNum(0, 5));
console.log(twoNum(20, 20));

console.log(twoNum(30, 20));
console.log(twoNum(50, 20));
