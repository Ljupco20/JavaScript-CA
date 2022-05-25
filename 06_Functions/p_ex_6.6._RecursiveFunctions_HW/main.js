"use strict";
function factorial(n) {
  console.log("First log ", n);
  if (n === 0) {
    console.log("Second log ", n);
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(5));
