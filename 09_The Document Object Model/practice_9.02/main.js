"use strict";

let outputClassElement = document.querySelector(".output");
console.dir(outputClassElement);
let mainList = outputClassElement.children[2];
mainList.id = "mainList";
console.dir(mainList);
// let divArray = document.querySelectorAll("div");

// for (let i = 0; i < divArray.length; i++) {
//   divArray[i].id = "div" + (i + 1);
//   if (i === 0) {
//     divArray[i].style = "color: black";
//   } else if (i % 2 === 0) {
//     divArray[i].style = "color: red";
//   } else {
//     divArray[i].style = "color: blue";
//   }
// }
// console.dir(divArray);

let divArr = [];
for (let i = 0; i < outputClassElement.children.length; i++) {
  let element = outputClassElement.children[i];
  console.dir(element.localName);
  if (element.localName === "div") {
    divArr.push(element);
    let elementIndex = divArr.indexOf(element);
    console.log(elementIndex);
    if (elementIndex % 2 === 0) {
      element.style = "color: red";
    } else {
      element.style = "color: blue";
    }
  }
}

console.log(divArr);
