"use strict";
let rain = true;

if (rain) {
  console.log("Take an umbrella");
} else {
  console.log("U can leave ur umbrella home");
}
console.log("-----------------------------------------------");

// let inputUser = prompt("What's ur age?");

// let age = Number(inputUser);

// if (age < 18) {
//   console.log("U can't drink alcohol");
// } else {
//   console.log("u can drink alcohol");
// }
console.log("-----------------------------------------------");
///////// Always remeber to use the double == sign in this case
let hobby = "dancing";

if ((hobby = "coding")) {
  console.log("I love coding too!");
} else {
  console.log("Can u teach me that?");
}
console.log("-----------------------------------------------");

let age = 10;
let cost = 0;
let message;
if (age < 3) {
  cost = 0;
  message = "Access is free under three";
} else if (age >= 3 && age <= 12) {
  cost = 5;
  message = "With the children discount, the fee is 5 dollars";
} else if (age >= 12 && age <= 65) {
  cost = 10;
  message = "A regular ticket is 10 dollars";
} else {
  cost = 7;
  message = "Seniors ticket is 7 dollars";
}
console.log(message);
console.log("Your total cost is " + cost);
