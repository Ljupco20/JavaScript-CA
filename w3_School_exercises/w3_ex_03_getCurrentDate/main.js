"use strict";

let today = new Date();
console.log(today);

let day = today.getDate();

console.log(day);

let month = today.getMonth() + 1;
console.log(month);

let year = today.getFullYear();

if (day < 9) {
  day = "0" + day;
}
if (month < 9) {
  month = "0" + month;
}

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
