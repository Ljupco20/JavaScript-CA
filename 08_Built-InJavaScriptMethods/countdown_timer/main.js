"use strict";

let endDate = new Date("6/19/2022");

console.log(endDate);

function countdown(date) {
  let currentDate = Date.now();
  let dateFromParam = Date.parse(date);

  let timeRemaining = dateFromParam - currentDate;
  let daysRemaining = timeRemaining / (1000 * 60 * 60 * 24);
  let hoursRemaining = (daysRemaining - Math.floor(daysRemaining)) * 24;
  let minutesRemaining = (hoursRemaining - Math.floor(hoursRemaining)) * 60;
  let secondsRemaining = (minutesRemaining - Math.floor(minutesRemaining)) * 60;
  let millisecondsRemaining =
    (secondsRemaining - Math.floor(secondsRemaining)) * 1000;

  console.log(
    `${Math.floor(daysRemaining)} days, ${Math.floor(
      hoursRemaining
    )} hours, ${Math.floor(minutesRemaining)} minutes, ${Math.floor(
      secondsRemaining
    )} seconds, ${Math.floor(millisecondsRemaining)} milliseconds`
  );
}

countdown(endDate);
