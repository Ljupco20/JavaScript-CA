"use strict";

///////////////////////////////////////////////////////////

function posNeg(num1, num2) {
  if (num1 > 0) {
    console.log(`${num1} is positive number`);
  } else {
    console.log(`${num1} is negative number`);
  }
  if (num2 > 0) {
    console.log(`${num2} is positive number`);
  } else {
    console.log(`${num2} is negative number`);
  }
}
posNeg(2, 5);
posNeg(-3, 5);
posNeg(-3, -5);
posNeg(9, -5);
/////////////////////////////////////////////////
console.log("---------- positive_negative ------------");

function positive_negative(x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, 5));
console.log(positive_negative(-3, -5));
console.log(positive_negative(-3, 5));
console.log(positive_negative(9, -5));
