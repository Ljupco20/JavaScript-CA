"use strict";

let myTable = [];
let row = Number(prompt("Please enter the number of rows"));
let col = Number(prompt("Please enter the number of columns"));

for (let i = 0; i < row; i++) {
  myTable.push([]);
  for (let cell = 0; cell < col; cell++) {
    myTable[i].push(`Row ${i} Col ${cell}`);
  }
}
console.table(myTable);
