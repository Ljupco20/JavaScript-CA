"use strict";

(function (x, y) {
  for (let i = x; i <= y; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      console.log(i);
    }
  }
})(2014, 2050);

//////////Check Leap Year Using newDate() and range//////////
console.log("----Check Leap Year Using newDate()-----");

function cheackLeapYearInRange(startYear, endYear) {
  let leapStart = new Date(startYear, 1, 29);
  console.log(leapStart);
  leapStart = leapStart.getDate() === 29;
  console.log(leapStart);
  let leapEnd = new Date(endYear, 1, 29);
  console.log(leapEnd);
  leapEnd = leapEnd.getDate() === 29;
  console.log(leapEnd);

  for (let i = startYear; i <= endYear; i++) {
    if ((i % 4 === 0 && i !== 100) || i % 400 === 0) {
      console.log(i);
    }
  }
}

cheackLeapYearInRange(2014, 2050);

//////////Check Leap Year Using newDate() and range//////////
console.log("----Check Leap Year Using newDate()-----");

function cheackLeapYear(year) {
  //three conditions to find out the leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}
const year = prompt("Enter a year:");
cheackLeapYear(year);
