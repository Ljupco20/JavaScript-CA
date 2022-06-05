"use strict";

function greet(name) {
  console.log(`Hello my name is ${name}`);
}

// let name = prompt("Please enter your name");

// greet(name);

////////////////////////////////////////////
console.log("-----------------------------");

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(add(5, 5));
console.log(add(10, 5));

////////////////////////////////////////////
console.log("-----------------------------");

function add2(x, y) {
  return x + y;
}

// let number1 = parseFloat(prompt("Enter the first number: "));
// let number2 = parseFloat(prompt("Enter the second number: "));

// let result2 = add(number1, number2);
// console.log(`The result is ${result2}`);

////////////////////////////////////////////
console.log("-----------------------------");

let a = "Hello";
function greet2() {
  a = 3;
}
console.log(a);

greet2();
console.log(a);

////////////////////////////////////////////
console.log("-----------------------------");

function greet3() {
  b = "Yo";
  let c = "hey";
}
greet3();
console.log(b);
//In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable. But if u add strict mode u can't.
console.log(c);
//main.js:51 Uncaught ReferenceError: b is not defined at greet3
