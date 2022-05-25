"use strict";

let addTwoNumbers = (x, y) => x + y;
let result = addTwoNumbers(15, 10);
console.log(result);

console.log("---------------------------");

function testAvailability() {
  let y = "I'll return";
  console.log("Available here:", y);
  return y;
}
let z = testAvailability();
console.log("Outside the function:", z);
// console.log("Not available here:", y);

console.log("------------ let ---------------");

// function doingStuff() {
//   if (true) {
//     console.log(x);
//     let x = "local";
//   }
// }
// doingStuff();

console.log("------------ var ---------------");

// function doingStuff() {
//   if (true) {
//     console.log(x);
//     var x = "local";
//   }
// }
// doingStuff();

console.log("------------ const ---------------");

function doingStuff() {
  if (true) {
    const X = "local";
  }
  console.log(X);
}
doingStuff();
