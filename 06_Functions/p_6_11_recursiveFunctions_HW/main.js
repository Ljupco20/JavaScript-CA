"use strict";

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

sum(3);
console.log(sum(3));

console.log("----------------------");

function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
