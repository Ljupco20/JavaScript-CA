"use strict";

(function () {
  console.log("IIFE!");
})();

console.log("-------------- Arrow IFFE ----------------");

(() => {
  console.log("run right away");
})();
