"use strict";

let add2Num = function (num1, num2) {
  let sum = num1 + num2;
  return sum;
};

console.log(add2Num(2, 4));

console.log("--------- Default or unsuitable parameters ---------");

function addTwoNumbers(x = 2, y = 4) {
  // return x + y;
  console.log(x + y);
}

// console.log(addTwoNumbers(5, 10));
addTwoNumbers();
addTwoNumbers(6, 6);
addTwoNumbers(10);
addTwoNumbers(1, 2, 3, 4);
