"use strict";

let myString = "I love JavaScript";

function stringToNumbers(str) {
  let lowerCaseString = str.toLowerCase();
  let arr = ["a", "e", "i", "o", "u"];

  arr.forEach((element) => {
    lowerCaseString = lowerCaseString.replaceAll(element, arr.indexOf(element));
  });
  return lowerCaseString;
}
console.log(stringToNumbers(myString));

function stringToNumbers(str) {
  let lowerCaseString = str.toLowerCase();
  let arr = ["a", "e", "i", "o", "u"];

  arr.forEach((element, index) => {
    lowerCaseString = lowerCaseString.replaceAll(element, index);
  });
  return lowerCaseString;
}
console.log(stringToNumbers(myString));
