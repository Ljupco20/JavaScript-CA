"use strict";

let inputUser = prompt("Please enter a name");
let friend = "";

switch (inputUser) {
  case "Filip":
    console.log("Filip is my friend");

    break;
  case "Ljupcho":
    console.log("Ljupcho is my friend");

    break;
  case "Marijana":
    console.log("Marijana is my friend");

    break;

  default:
    friend = "Unknown name";
    break;
}
