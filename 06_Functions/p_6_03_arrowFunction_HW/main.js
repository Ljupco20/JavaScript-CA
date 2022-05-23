"use strict";

console.log("-------------------------------");

//   (param1, param2) => body of the function;

//   () => body of the function;
//   param => body of the function;
//   (param1, param2) => {};


// function doingStuff(x){
//   console.log(x);
// }

let doingStuff = x => console.log(x);
doingStuff("Great");

let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(5, 3);

let sayHi = () => console.log("Hi");
sayHi();

console.log("-------combine the arrow function with certain built-in methods-------");

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));