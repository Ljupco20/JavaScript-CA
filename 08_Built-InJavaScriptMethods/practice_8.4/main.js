"use strict";

let currenDateTime = new Date();
console.log(currenDateTime);

let now = Date.now();
console.log(now / 60 / 60 / 24 / 12);

let milliDate = new Date(now + 3600 * 1000);
console.log(milliDate);

console.log("-------------------------------------------------");
let d = new Date();
console.log("Day of the week: ", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth() + 1);
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds", d.getMilliseconds());
console.log("Time:", d.getTime());

// let time = d.getTime() / 1000 / 60 / 24 / 30 / 12;
// console.log(time);
console.log("-------------------------------------");

let myDate = Date.parse("3/16/2022");
console.log(myDate);
