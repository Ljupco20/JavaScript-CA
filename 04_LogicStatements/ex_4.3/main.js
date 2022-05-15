"use strict";

let answer = prompt("What's your age?");
let age = Number(answer);
let message;

age > 21
  ? (message = "You can go to the Disko and drink alchohol")
  : (message = "You cant go to the Disko and u cant drink alchohol");
console.log(message);

console.log("-----------------------------");
