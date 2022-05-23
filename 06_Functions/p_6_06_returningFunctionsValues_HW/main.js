"use strict";

// function addTwoNumbers(x, y) {
//   console.log(x + y);

// }

// let result = addTwoNumbers(4, 5);
// console.log(result);

/*The console.log(result) line outputs undefined, because
nothing is inserted into the function to store the result, meaning our function
addTwoNumbers() does not send anything back. */


function addTwoNumbers(x, y) {
  return x + y;
}

let result = addTwoNumbers(5, 4);
console.log(result);

console.log(addTwoNumbers(10, 10));

console.log("---------------------------");

let resultsArr = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  resultsArr.push(result);
}

console.log(resultsArr);