"use strict";

let userName = prompt("Enter your name: ");
let message;

switch (userName) {
  case "boban":
  case "valentina":
  case "ljupco":
  case "maja":
  case "filip":
  case "valmira":
  case "ilija":
    message = "Hello friend";
    break;
  default:
    message = "I don't know you!";
    break;
}
alert(message);
