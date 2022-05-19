"use strict";

let counter = 0;
let step = 13;
let i = 0;
do {
  counter += step;
  console.log(
    `The counter is ${counter} ` +
      `and the number times it loops over is ` +
      ++i
  );
} while (counter < 100);

// while (counter < 100) {
//   counter += step;
//   console.log(
//     `The counter is ${counter} ` +
//       `and the number times it loops over is ` +
//       ++i
//   );
// }
