"use strict";

///////////////////////////////////////////////////////////
console.log("----Check _if_1st January_is_Sunday-----");

function ifSunday1stJan(startYear, endYear) {
  for (let i = startYear; i <= endYear; i++) {
    let daySunday = new Date(i, 0, 1);
    if (daySunday.getDay() === 0) {
      console.log("1st January is being a Sunday  " + i);
    }
  }
}

ifSunday1stJan(2014, 2050);
