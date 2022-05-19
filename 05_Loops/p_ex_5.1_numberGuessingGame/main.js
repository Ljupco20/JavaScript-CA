"use strict";

let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
console.log(randomNumber);
let rightNumber = false;
while (!rightNumber) {
  let userNumber = Number(prompt("Enter a number between 0 and 10"));

  if (userNumber === randomNumber) {
    alert("You guessed the right number. Congrats!");
    rightNumber = true;
  } else
    userNumber > randomNumber
      ? alert("Your guess is higher than the correct number.")
      : alert("Your guess is lower than the correct number. ");
}

// else if (userNumber > randomNumber) {
//   alert("Your guess is higher than the correct number. Congrats!");
// } else {
//   alert("Your guess is lower than the correct number. Congrats!");
// }
