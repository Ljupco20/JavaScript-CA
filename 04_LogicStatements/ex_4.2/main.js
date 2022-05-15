"use strict";

let answer = prompt("What's your age?");
let age = Number(answer);
let message;
if (age >= 21) {
  message = "You can go to the Disko and drink alchohol";
} else if (age >= 19) {
  message = "You can go to the Disko but u cant drink alchohol";
} else {
  message = "You cant go to the Disko and u cant drink alchohol";
}
console.log(message);
