"use strict";

// nested for loops

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i == 2) break;
    console.log(`i = ${i} | j = ${j}`);
  }
}