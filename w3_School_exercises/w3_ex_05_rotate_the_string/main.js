"use strict";

let str = "w3resource";

//1. Reverse a String With Built-In Functions
console.log("------Reverse a String With Built-In Functions-------");

function revStrWithBMethods(str1) {
  let splitStr = str1.split();
  let revArr = splitStr.reverse();
  let joinArr = revArr.join();
  return joinArr;
}

console.log(revStr(str));

// Reverse a String With a Decrementing For Loop
console.log("------Reverse a String With a Decrementing For Loop-------");

function revStr(str2) {
  let newString = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    newString += str[i];
    console.log(newString);
  }
  return newString;
}

console.log(revStr(str));

//Using recursive function
console.log("------Reverse a String Using recursive function-------");

function reverseStr(str3) {
  if (str3 === "") {
    return "";
  } else {
    console.log(str3.substr(1));
    console.log(str3.charAt(0));

    return reverseStr(str3.substr(1)) + str3.charAt(0);
  }
}
console.log(reverseStr(str));
