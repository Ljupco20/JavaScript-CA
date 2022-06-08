"use strict";

function getRecursive(num) {
  console.log(num);
  if (num > 0) {
    getRecursive(--num);
    num++;
    console.log(`End of call ${num}`);
  }
  console.log(`End of function ${num}`);
}
getRecursive(3);

console.log("----------------------");

function logRecursive(num) {
  console.log("Started function", num);
  if (num > 0) {
    logRecursive(num - 1);
  } else {
    console.log(`done with recursion`);
  }
  console.log(`Ended function: `, num);
}
logRecursive(5);
