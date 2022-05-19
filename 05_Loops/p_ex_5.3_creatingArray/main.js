"use strict";

let myWork = [];
let stat = false;

for (let i = 1; i <= 10; i++) {
  // console.log(i);
  stat = !stat;
  myWork.push({
    name: `Lesson ${i}`,
    status: stat,
  });
}
console.log(myWork);
