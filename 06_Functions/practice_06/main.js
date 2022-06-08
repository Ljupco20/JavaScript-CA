"use strict";

let x = 12;
let y = 10;
let oprator = prompt("Please enter an operator (*, /, +, -)");

// function basicCalculator(param1, param2, param3) {
//   console.log("Param1 is " + param1, "The type is " + typeof param1);
//   console.log("Param2 is " + param2, "The type is " + typeof param2);
//   console.log("Param3 is " + param3, "The type is " + typeof param3);

//   if (param3 === "*") {
//     let result = param1 * param2;
//     console.log(
//       `The operation is multiplication ${param1} ${param3} ${param2} and the result is ${result} `
//     );
//   } else if (param3 === "+") {
//     let result = param1 + param2;
//     console.log(
//       `The operation is sum ${param1} ${param3} ${param2} and the result is ${result} `
//     );
//   }
// }

// basicCalculator(x, y, oprator);

function basicCalculatorSwitch(param1, param2, param3) {
  let result;
  switch (param3) {
    case "*":
      result = param1 * param2;

      return `The operation is multiplication ${param1} ${param3} ${param2} and the result is ${result} `;

    case "/":
      result = param1 / param2;

      return `The operation is division ${param1} ${param3} ${param2} and the result is ${result} `;

    case "+":
      result = param1 + param2;

      return `The operation is addition ${param1} ${param3} ${param2} and the result is ${result} `;

    case "-":
      result = param1 - param2;

      return `The operation is substraction ${param1} ${param3} ${param2} and the result is ${result} `;
  }
}

console.log(basicCalculatorSwitch(x, y, oprator));
