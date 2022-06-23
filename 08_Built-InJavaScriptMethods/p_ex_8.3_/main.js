"use strict";

let arrOfNums = [23, 12, 55, 10, 125, 3];

let modifiedArr = arrOfNums.map((element) => {
  return element * 2;
});

let modifiedArr2 = arrOfNums.map((element) => element * 2);

console.log(modifiedArr);

console.log(modifiedArr2);
