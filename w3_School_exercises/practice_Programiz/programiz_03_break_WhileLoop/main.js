"use strict";

// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0;


while (true) {
  let inputNum = parseInt(prompt('Please enter a number'));
  if (inputNum < 0) break;
  sum += inputNum;
  console.log(sum);

}
console.log(`The sum is ${sum}`);