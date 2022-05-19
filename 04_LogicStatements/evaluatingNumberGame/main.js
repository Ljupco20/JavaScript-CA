"use strict";

// let userInput = prompt("Please enter a number between 0 and 100");
// let ranNum = Math.random() * 100;
// ranNum = Math.floor(ranNum);
// console.log(ranNum);
// let message;

// if (userInput < ranNum) {
//   message = "Your number " + userInput + " is smaller then computers " + ranNum;
// } else if (userInput === ranNum) {
//   message = "Your number " + userInput + " is equal to computers " + ranNum;
// } else if (userInput > ranNum) {
//   message = "Your number " + userInput + " is greater then computers " + ranNum;
// } else {
//   message = "You entered invalid number!";
// }
// console.log(message);

let userInput = prompt("Enter a number from 0 to 10:");
let userNumber = Number(userInput);
let randomNumber = Math.floor(Math.random() * 10);
let message;

if (userNumber < randomNumber) {
  message = `Your number ${userNumber} is smaller then computers ${randomNumber}`;
} else if (userNumber === randomNumber) {
  message = `Your number ${userNumber} is equal to computers ${randomNumber}`;
} else if (userNumber > randomNumber) {
  message = `Your number ${userNumber} is greater then computers ${randomNumber}`;
} else {
  message = "You entered an invalid number!";
}

alert(message);
