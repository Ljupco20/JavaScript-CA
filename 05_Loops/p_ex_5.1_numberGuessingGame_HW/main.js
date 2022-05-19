"use strict";

let maxGuess = 0;

let ranNum = Math.floor(Math.random() * 5) + 1;

console.log(ranNum);

let answer = false;
let i = 0;

// console.log(typeof userInput, userInput);

while (maxGuess < 3 && answer == false) {
  let userInput = Number(prompt("Please enter a number between 1 and 5"));
  if (userInput === ranNum) {
    console.log(
      `Great the secret number was ${ranNum} and your guess was ${userInput}`
    );
    answer = true;
  } else {
    console.log("Wrong number, please try again");
    answer;
    maxGuess++;
  }
}
