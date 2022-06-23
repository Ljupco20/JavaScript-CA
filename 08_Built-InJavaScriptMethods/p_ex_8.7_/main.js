"use strict";

let myDate = new Date();
myDate.setFullYear(2321);
console.log(myDate);

let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = myDate.getDate();
let year = myDate.getFullYear();
let month = myDate.getMonth();
let monthName = monthArray[month];
console.log(monthName);

console.log(day.toString(), "-", monthName.toString(), "-", year.toString());
console.log(`${day}-${monthName}-${year}`);

// pondelnik 16 maj
// arr za denovite getDate()
//console.log(`${dayoftheweek} ${day}-${monthName}-${year}`);
let dayOfTheWeek = [];
