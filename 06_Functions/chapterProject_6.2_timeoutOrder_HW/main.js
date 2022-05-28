"use strict";


const firstFunction = () => {
  console.log("one");
}

const secondFunction = () => {
  console.log("two");
}

const thirdFunction = () => {
  console.log("three");
  firstFunction();
  secondFunction();
}

const fourthFunction = () => {
  console.log("four");
  setTimeout(firstFunction);
  thirdFunction();
}

fourthFunction();