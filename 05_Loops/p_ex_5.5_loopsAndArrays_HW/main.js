"use strict";

let gridArray = [];

let cells = 64;
let counter = 0;

let rows;
console.log("-------out undefined --------", rows, typeof rows);

for (let i = 0; i < cells + 1; i++) {
  if (counter % 8 === 0) {
    if (rows !== undefined) {
      gridArray.push(rows);
      console.log("------- first if --------", rows, typeof rows);
    }
    rows = [];
    console.log("------- second if --------", rows, typeof rows);
  }

  counter++;
  let temp = counter;
  rows.push(temp);
  console.log("------- temp --------", temp, typeof temp);
}

console.table(gridArray);
