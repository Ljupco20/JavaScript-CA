"use strict";

let inputUser = prompt("Please enter a number between 0 and 100");

inputUser = Number(inputUser);
let variable = " ";

switch (inputUser) {
  case inputUser < 30:
    console.log("The number u wrote is less than 30");
    variable = "The number u wrote is less than 30";
    break;
  case inputUser > 30 && inputUser < 70:
    variable = "The number u wrote is between 30 and 70";
    break;
  case inputUser > 71 && inputUser < 100:
    variable = "The number u wrote is between 71 and 100";
    break;
}
console.log(inputUser, variable);
