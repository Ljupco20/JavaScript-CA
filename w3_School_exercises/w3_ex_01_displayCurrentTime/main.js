"use strict";

const today = new Date(); // Fri May 27 2022 18:25:05 GMT+0200 (Central European Summer Time)

console.log(today);

const day = today.getDay(); // 5 (today is Friday that's why it's 5)

console.log(day);

const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = daylist[day];

console.log(currentDay);

let hour = today.getHours();

console.log(hour);

let minutes = today.getMinutes();

console.log(minutes);

let seconds = today.getSeconds();

if (hour >= 12) {
  hour = hour - 12;
  hour = hour + " PM";
} else {
  hour = hour + " AM";
}

console.log(
  `Sample Output: Today is: ${currentDay}\nCurrent time is ${hour} : ${minutes} : ${seconds}`
);
