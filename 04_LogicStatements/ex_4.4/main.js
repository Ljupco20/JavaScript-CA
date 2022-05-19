"use strict";
//////////////   8-ball    ///////////////

// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 5 to obtain a number between 0 and 5
randomNumber = randomNumber * 5;
//shorter operand: randomNumber *= 5;
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber);

console.log(randomNumber);

let userInput = prompt("Ask a question fot he future.");

let message;
switch (randomNumber) {
  case 0:
    message = "Yes you will!";
    break;
  case 1:
    message = "No you don't";
    break;
  case 2:
    message = "Maybe!";
    break;
  case 3:
    message = "In your dreams!";
    break;
  case 4:
    message = "Try one more time!";
    break;
  case 5:
    message = "Next life!";
    break;
}
console.log(userInput);
console.log(message);
