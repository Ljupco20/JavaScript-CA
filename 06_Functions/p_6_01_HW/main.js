"use strict";

function sayHello() {
  let you = prompt("What's your name? ");
  console.log("Hello", you + "!");
}

sayHello();

console.log("-------------------------------");

let varContainingFunction = function () {
  let varFunction = "I'm in a function.";
  console.log("Hi there!", varFunction);
};
varContainingFunction();

console.log("-------------------------------");

function tester(para1, para2) {
  return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";

console.log(tester(arg1, arg2));
