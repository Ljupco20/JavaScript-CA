"use strict";

///////////////////////////////////////////////////////////
let ranNum = Math.floor(Math.random() * 10) + 1;

let userGuess = prompt("Please guess the number between 1 and 10");
userGuess = Number(userGuess);

if (ranNum === userGuess) {
  console.log(`Good Work you guessed the number whitch was ${ranNum}`);
} else {
  console.log(`Not matched the number was ${ranNum}`);
}
