"use strict";

let i = 1;
const n = 5;

do {
  console.log(i);
  i++
} while (i <= n);

console.log('-----------------------------------');

let sum = 0;
let num = 0;

do {
  sum += num;
  num = parseInt(prompt("Please enter a number"));
  console.log(`The sum inside the do while loop is ${sum}`);
} while (num >= 0);

console.log(`The sum is ${sum}`);