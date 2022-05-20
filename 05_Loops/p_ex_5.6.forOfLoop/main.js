"use strict";

let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

console.log("---------------  for loop  -----------------");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("---------------- for of loop ----------------");

for (const element of arr) {
  console.log(element);
}
