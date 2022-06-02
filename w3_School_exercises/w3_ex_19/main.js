"use strict";

///////////////////////////////////////////////////////////

function within(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}
console.log(within(90));
console.log(within(150));
console.log(within(450));
