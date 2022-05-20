"use strict";

let stringVar = "";
let skipNum = 5;

for (let i = 0; i < 10; i++) {
  if (i === skipNum) {
    continue;
  }
  if (i === 9) {
    stringVar += i;
  } else {
    stringVar += i + ", ";
  }
}
console.log(stringVar);
