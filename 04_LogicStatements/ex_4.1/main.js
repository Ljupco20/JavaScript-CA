"use strict";

const myVariable = true;
console.log(myVariable);

if (myVariable) {
  console.log("first statement is true");
}

console.log(!myVariable);
if (!myVariable) {
  console.log("second statement is true");
} else {
  console.log("second statement is false");
}

/////////////////////////////////////////////////////////////////

console.log("---------------------------------------------");

if (myVariable) {
  console.log("first statement is true");
} else if (!myVariable) {
  console.log("second statement is true");
} else {
  console.log("second statement is false");
}
