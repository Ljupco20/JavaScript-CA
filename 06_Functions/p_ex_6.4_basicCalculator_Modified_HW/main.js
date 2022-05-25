"use strict";

let arr = [];

let addTwoNumber = function (x, y) {
  return x + y;
};

for (let i = 0; i < 10; i++) {
  let val1 = i * 5;
  let val2 = i * i;
  let result = addTwoNumber(val1, val2);
  arr.push(result);
}

console.log(arr);
