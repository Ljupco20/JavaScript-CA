"use strict";



const recursiveFunction = function (start) {
  console.log("--- 1 --- this is start value now: ", start);
  if (start < 10) {
    console.log("--- 2 --- this is second value now: ", start);
    return recursiveFunction(start + 1);

  }
  console.log("--- 3 --- this is third value now: ", start);
  return;
}
recursiveFunction(5);