"use strict";

function sayHello() {
  let you = prompt("What's your name");
  console.log("Hello ", you + "!");
}
// sayHello();
//////////////////////////////////////
console.log("------------Arrow function -------------");

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers(10, 20);

let add2Num = (num1, num2) => console.log(num1 + num2);
add2Num(3, 2);
//////////////////////////////////////
console.log("------------ Returning function values -------------");

let arrResults = [];
for (let i = 0; i < 10; i++) {
  let result = addTwoNumbers(i, 2 * i);
  arrResults.push(result);
}

console.log(arrResults);
