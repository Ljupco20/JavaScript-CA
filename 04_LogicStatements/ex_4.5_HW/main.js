"use strict";

let prize = prompt("Choose a number between 0 and 10");
prize = Number(prize);
console.log(prize);

let message = "I can say ";
let retVal = "";

switch (prize) {
  case 1:
    retVal = "u r the best!";
    break;
  case 2:
    retVal = "u were so close";
    break;
  case 3:
    retVal = "Top 3 is still good";
    break;
  case 4:
    retVal = "u r in Chapmions League last qualifing place";
    break;
  case 5:
  case 6:
    retVal = "Europa League Conference is still good";
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    retVal = "u r still in top half of the league";
    break;
}
console.log("-----------------------------");
console.log(`${message} ${retVal}`);
