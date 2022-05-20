"use strict";

let obj = {
  name: "laptop",
  color: "grey",
  inches: 17,
};
let arr = [];

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];

    arr.push(element);
  }
}
console.log(arr);
