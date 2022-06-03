"use strict";

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while (number >= 0) {

  // add all positive numbers
  sum += number;

  // take input again if the number is positive
  number = parseInt(prompt('Enter a number: '));
  console.log(`The sum in the loop is ${sum}.`);
}

// display the sum
console.log(`The sum is ${sum}.`); 10