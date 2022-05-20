"use strict";
let simpleObject = {
  Id: 1,
  type: "Ice cream",
  description: " milk product",
};

let arr = [];
for (const prop in simpleObject) {
  console.log(
    "Name of prop: " + prop + " -- value of prop: " + simpleObject[prop]
  );
  arr.push(simpleObject[prop]);
}

console.log(arr);

console.log(Object.keys(simpleObject));
console.log(Object.values(simpleObject));

for (const keys of Object.keys(simpleObject)) {
  console.log(`${keys}: ${simpleObject[keys]}`);
}
console.log("---------------- break --------------");
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
console.log("---------------- continue --------------");
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
