"use strict";

let myVar = "1000";

(function () {
  let myVar = "Local var 1000";
  console.log(myVar);
})();

////////////////////////////////////////////////////
console.log("-------------------------------------");

let resultVar = (function () {
  let myVar = "Local IIFE resultVar";
  return myVar;
})();

console.log(resultVar, myVar);

////////////////////////////////////////////////////
console.log("-------------------------------------");

((param) => (myVar = param))("My var from parametar");
console.log(myVar);
