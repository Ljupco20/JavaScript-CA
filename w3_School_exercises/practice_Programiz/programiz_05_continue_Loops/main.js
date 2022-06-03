"use strict";

// program to print the value of i
for (let i = 0; i <= 5; i++) {
  if (i === 3) continue;
  console.log(`i is now ${i}`);
}

console.log('--------------continue with while Loop---------------');

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

// let sum = 0;
// let num = 0;

// while (num >= 0) {
//   sum += num;
//   num = parseInt(prompt('Please enter a number'));
//   if (isNaN(num)) {
//     console.log(`You entered a string`);
//     num = 0; // the value of number is made 0 again
//     continue;
//   }
//   console.log(`Now the sum is ${sum}.`);
// }
// console.log(`The sum is ${sum}.`);

console.log('--------------continue with Nested Loop---------------');

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j == 2) continue;
    console.log(`i = ${i}, j = ${j}`);
  }
}