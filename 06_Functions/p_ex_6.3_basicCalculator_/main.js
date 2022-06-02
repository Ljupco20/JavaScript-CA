"use strict";

let num1 = 5;
let num2 = 7;
let calc;

let calculations = function (arg1, arg2, calc) {
  if (calc === "addition") {
    return arg1 + arg2;
  } else if (calc === "substraction") {
    return arg1 - arg2;
  } else {
    return arg1 + arg2;
  }
};

console.log(calculations(12, 5, "substraction"));
console.log(calculations(num1, num2, "addition"));
console.log(calculations(num1, num2));
