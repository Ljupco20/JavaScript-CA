"use strict";

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very",
  "powerful"];

console.log(message);

console.log("-------------------------------");

function addTwoNumbers(x, y) {
  console.log(x + y);
}
let arr = [5, 9];
addTwoNumbers(...arr);

console.log("-------------------------------");

function addFourNumbers(x, y, z, a) {
  console.log(x + y + z + a);
}
let arr1 = [5, 9];
let arr2 = [6, 9];
addFourNumbers(...arr1, ...arr2);