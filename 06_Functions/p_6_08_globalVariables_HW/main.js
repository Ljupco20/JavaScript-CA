"use strict";

console.log("---------------------------");

let globalVar = "Accessible everywhere!";
console.log("Outside function", globalVar);

function creatingNewScope() {
  console.log("Access to global vars inside function.", globalVar);
}
creatingNewScope("some parameter");
console.log("still available", globalVar);

console.log("---------------------------");

let x = "global";

function doingStuff() {
  let x = "local";
  console.log(x);
}

console.log(x);

doingStuff();

console.log("---------------------------");

let y = "global";
function doingSomething(y) {
  console.log(y);
}

console.log(y);
doingSomething("param");

console.log("---------------------------");

function confuseTheReader() {
  z = "Guess the scope ...";
  console.log("Inside the function z is: ", z);
}
confuseTheReader();
console.log("Outside the function z is: ", z);
