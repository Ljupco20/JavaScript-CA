"use strict";

// // program to count down numbers to 1
// function countdown(num) {
//   // display the number
//   console.log(`Num ---top of function --- ${num}`);
//   // decrease the number value
//   const num2 = num - 1;

//   // base case
//   if (num2 > 0) {
//     countdown(num2);
//     console.log(`Num2 ---inside if statetment --- ${num2}`);
//   }

//   console.log(`Num ---outside--- ${num}`);
//   console.log(`Num2 ---outside--- ${num2}`);
// }

// countdown(4);

function countDownFrom(number) {
  for (let i = number; i > 0; i--) {
    console.log(i);
    // debugger;
  }
}
countDownFrom(4);
