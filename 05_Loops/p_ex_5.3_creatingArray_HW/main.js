"use strict";

let myWork = [];

for (let i = 1; i <= 10; i++) {
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 == 0 ? true : false,
  };
  lesson[i];
  myWork.push(lesson);
}
console.log(myWork);
