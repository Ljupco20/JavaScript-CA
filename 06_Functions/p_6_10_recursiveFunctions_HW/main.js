"use strict";

function getRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    getRecursive(--nr);
    console.log("Done with function:", nr);
  }
  console.log("Done with function2:", nr);
}
getRecursive(3);
console.log("----------------------------------");

function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr > 0) {
    logRecursive(nr - 1);
  } else {
    console.log("done with recursion", nr);
  }
  console.log("Ended function:", nr);
}
logRecursive(3);
console.log("----------------------------------");

let countdown = function f(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    f(nextNumber);
  }
};

let newYearCountdown = countdown;
countdown = null;
newYearCountdown(10);
