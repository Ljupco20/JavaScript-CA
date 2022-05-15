"use strict";

let arr = ["Rock", "Paper", "Scissors"];

let result = " ";

let compNumRandom = Math.random() * 3;
compNumRandom = Math.floor(compNumRandom);

let inputUser = prompt(
  "Player, please choose between Rock, Paper and Scissors"
);
inputUser = Number(inputUser);

switch (arr[compNumRandom] + arr[inputUser]) {
  case arr[0] + arr[2]:
  case arr[2] + arr[1]:
  case arr[1] + arr[0]:
    result = "Computer wins";

    break;

  case arr[0] + arr[1]:
  case arr[1] + arr[2]:
  case arr[2] + arr[0]:
    result = "Player wins";

    break;

  case arr[0] + arr[0]:
  case arr[1] + arr[1]:
  case arr[2] + arr[2]:
    result = "It's a tie";

    break;

  default:
    break;
}
2;
console.log(result);
