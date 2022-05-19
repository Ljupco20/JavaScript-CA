"use strict";

let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

console.log("-----------------------------------");

let response = [
  "eating",
  "seating",
  "drinking",
  "running",
  "sleeping",
  "riding a bicycle",
  "climbing",
  "chilling",
];

prompt("Enter a question");
let message = "I am";
switch (randomNumber) {
  case 1:
    message += response[0];
    break;
  case 2:
    message += response[1];
    break;
  case 3:
    message += response[2];
    break;
  case 4:
    message += response[3];
    break;
  case 5:
    message += response[4];
    break;
  case 6:
    message += response[5];
    break;
  case 7:
    message += response[6];
    break;
  case 8:
    message += response[7];
    break;
  case 9:
    message += response[8];
    break;

  default:
    message = "I dont know what I am doing";
    break;
}
console.log(message);
