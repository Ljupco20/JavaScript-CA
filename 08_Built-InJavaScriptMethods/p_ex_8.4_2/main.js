"use strict";

let myString = "thIs will be capiTalized for each word";

function capitalizeWords(str) {
  let myLowerCaseString = myString.toLowerCase();
  let myCapitalizedArray = [];
  let myStringArray = myLowerCaseString.split(" "); // variablata so string so mali bukvi.split(" ");
  console.log(myStringArray);

  for (let i = 0; i < myStringArray.length; i++) {
    let firstLetter = myStringArray[i].slice(0, 1);
    firstLetter = firstLetter.toUpperCase();

    const restOfWord = myStringArray[i].slice(1);
    let wholeword = firstLetter + restOfWord;
    myCapitalizedArray.push(wholeword);
  }
  let finalStr = myCapitalizedArray.join(" ");

  return finalStr;
}
console.log(capitalizeWords(myString));
