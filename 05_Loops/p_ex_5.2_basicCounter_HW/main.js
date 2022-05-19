"use strict";

let counter = 0;
let step = 10;

do {
  console.log(`The counter is ${counter}`);
  counter = counter + step;
} while (counter <= 100);
