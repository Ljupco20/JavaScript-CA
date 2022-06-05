"use strict";

function something(x) {
  console.log(x);
}
something(5);
something("Ljupco");
something(true);
////////////////////////////////////

function variable(par1, par2) {
  if (typeof par1 === "number" && typeof par2 === "number") {
    console.log(par1 * par2);
  } else {
    console.log("not a number");
  }
}

variable(5, 2);
variable("something", 2);
variable("something", "something");
variable(5, 5);
/////////////////////////////////////////////////////

function evenOdd(x) {
  if (x % 2 === 0) {
    console.log(`The num is ${x} and it's even`);
  } else {
    console.log(`The num is ${x} and it's odd`);
  }
}
evenOdd(5);
evenOdd(6);

/////////////////////////////////////////////////////
let evenOdd2 = (x) =>
  x % 2 === 0
    ? console.log(`The num is ${x} and it's even`)
    : console.log(`The num is ${x} and it's odd`);
evenOdd2(7);
evenOdd2(8);

/////////////////////////////////////////////////////

let myword = prompt("please enter a word, to check if it's a palindorme");

function palindrome(myword) {
  let mywordreversed = myword.split("").reverse().join("");

  console.log(
    mywordreversed === myword ? "It's palindrome" : "It's not a palindrome"
  );
}
palindrome(myword);
