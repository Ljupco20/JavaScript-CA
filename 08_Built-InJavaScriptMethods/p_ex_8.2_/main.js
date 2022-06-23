"use strict";

let arr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];

let filteredArr = arr.filter((element, index, array) => {
  console.log(element, "at position ", index);
  console.log(
    array.indexOf(element),
    "is equal to ",
    index,
    array.indexOf(element) === index
  );
  return array.indexOf(element) === index;
});

console.log(filteredArr);
