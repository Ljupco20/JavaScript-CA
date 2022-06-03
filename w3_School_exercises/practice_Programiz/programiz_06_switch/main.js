"use strict";

let a = 1;

switch (a) {
  case "1":
    a = 1;
    break;

  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break
  default:
    a = "not found";
    break;

}
console.log(`The value is ${a}`);

console.log('-------------------------------------');

// program for a simple calculator

let result;

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch (operator) {
//   case '+':
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
//     break;
//   case '-':
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
//     break;
//   case '*':
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);

//     break;
//   case '/':
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
//     break;
//   default:
//     console.log('Wrong input');
// }

// multiple case switch program

let fruit = "apple";
switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log(`${fruit} is a fruit.`);
    break;
  default:
    console.log(`${fruit} is not fruit.`);
    break;
}