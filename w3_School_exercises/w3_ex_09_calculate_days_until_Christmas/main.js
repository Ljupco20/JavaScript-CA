"use strict";

///////////////////////////////////////////////////////////

let now = new Date();
const xmas = new Date(2022, 11, 25);

let difference = xmas - now;
console.log(difference);
let milisecondsDay = 1000 * 60 * 60 * 24;
console.log(milisecondsDay);

let daysUntillXmas = Math.ceil(difference / milisecondsDay);
console.log(daysUntillXmas);
