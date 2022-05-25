"use strict";

let variable1 = "1000";

(function () {
  variable1 = "inside IIFE";
  console.log(variable1);
})();

console.log("------------ 1 -------------");

let result = (function () {
  variable1 = "Inside second IIFE (let result)";
  return variable1;
})();

console.log(result, variable1);

console.log("------------ 2 -------------");

(function (param1) {
  variable1 = param1;
  console.log(variable1);
})("yes");

console.log("------------ 3 -------------");
