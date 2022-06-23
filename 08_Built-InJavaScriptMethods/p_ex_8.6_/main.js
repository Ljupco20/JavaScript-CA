"use strict";

console.log(Math.PI);

let num = 5.7;
let ceiling = Math.ceil(num);
let floor = Math.floor(num);
let round = Math.round(num);
// console.log(ceiling, floor, round);

let random1 = Math.floor(Math.random() * 11);
let random2 = Math.floor(Math.random() * 10 + 1);
let random3 = Math.floor(Math.random() * 100 + 1);
console.log(random1);
console.log(random2);
console.log(random3);

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomArbitrary(30, 100));

console.log(getRandomInt(30, 100));
let i = 0;
while (i < 100) {
  console.log(getRandomInt(30, 100));
  i++;
}
