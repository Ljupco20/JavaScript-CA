"use strict";

let num1 = 9;
let num2 = 7;
let operator;

function basicCalc(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
}

console.log(basicCalc(5, 7, "+"));
console.log(basicCalc(10, 5, "-"));
console.log(basicCalc(5, 5, "*"));
console.log(basicCalc(5, 5, "/"));
