"use strict";

let start = 10;

function countdown1(count) {
  console.log(count);
  if (count < 1) {
    return;
  }
  return countdown1(count - 1);
}

function countdown2(count) {
  console.log(count);
  if (count > 0) {
    count = count - 1;
    return countdown2(count);
  }
  return;
}
countdown2(start);
