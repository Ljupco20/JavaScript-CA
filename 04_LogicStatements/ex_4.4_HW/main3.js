"use strict";
let ball8 = Math.random() * 6;
ball8 = Math.floor(ball8);
console.log(ball8);

let inputUser = prompt("Guess the random number between 0 and 5!");

switch (ball8) {
  case 1:
    console.log("The number is 1");
    break;
  case 2:
    console.log("The number is 2");
    break;
  case 3:
    console.log("The number is 3");
    break;
  case 4:
    console.log("The number is 4");
    break;

  case 5:
    console.log("The number is 5");
    break;

  case 0:
    console.log("The number is 0");
    break;

  default:
    console.log("Number not in range");
    break;
}
console.log(`The number is ${ball8} and your guess was ${inputUser}`);
