"use strict";

// let myString = "MyWord";

// function wordScrambler(str = "") {
//   let stringLenght = str.length;
//   let scarmbledWord = "";
//   for (let i = 0; i < stringLenght; i++) {
//     let stringIndex = Math.floor(Math.random() * str.length);
//     // console.log(stringIndex);
//     let stringCharacter = str[stringIndex];
//     // console.log(stringCharacter);
//     scarmbledWord = scarmbledWord.concat(stringCharacter);
//     //  console.log(scarmbledWord);
//     str =
//       str.substring(0, stringIndex) +
//       str.substring(stringIndex + 1, stringLenght);
//     //  console.log(str);
//   }

//   return scarmbledWord;
// }

// console.log(wordScrambler(myString));

///////////////////////////////////////////
console.log("------------------Version 2----------------------");


let word = "Konkatinacija";
​
function wordScrambler(stringParametar = "") {
  let maxLenght = stringParametar.length;
  let scarmbledWord = "";
​
  for (let i = 0; i < maxLenght; i++) {
    let randomIndex = Math.floor(Math.random() * stringParametar.length);
    //console.log(stringParametar[randomIndex]);
    let randomCharacter = stringParametar[randomIndex];
    scarmbledWord = scarmbledWord + randomCharacter;
    stringParametar = stringParametar.substring(0,randomIndex) + stringParametar.substring(randomIndex + 1);
  }
​
  return scarmbledWord;
}
​
let scWord = wordScrambler(word);
console.log(scWord);