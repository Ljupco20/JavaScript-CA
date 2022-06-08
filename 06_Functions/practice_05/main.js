"use strict";

function convertMintoHours(minutes) {
  let result = Math.round(minutes / 60);
  return result;
}

console.log(convertMintoHours(360));
console.log(convertMintoHours(390));
