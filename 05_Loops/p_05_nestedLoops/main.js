"use strict";

for (let i = 0; i < 2; i++) {
  console.log("--------------First Loop start ---------------");
  console.log("First loop iteration = " + i);
  for (let j = 0; j < 5; j++) {
    console.log("----------Second Loop start---------");
    console.log("Second loop iteration 'i' = " + i);
    console.log("Second loop iteration 'j' = " + j);
    console.log("----------Second Loop end ---------");
  }
  console.log("------------First Loop end---------------");
}
