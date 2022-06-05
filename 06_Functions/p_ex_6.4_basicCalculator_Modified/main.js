"use strict";

let arr = [];

// let mCalculator = function (num1, num2) {
//   return num1 + num2;
// };
let mCalculator = (num1, num2) => num1 + num2; // with arrow function

for (let i = 0; i < 10; i++) {
  let arrNum = mCalculator(i * 5, i * i);
  arr.push(arrNum);
}
console.log(arr);
