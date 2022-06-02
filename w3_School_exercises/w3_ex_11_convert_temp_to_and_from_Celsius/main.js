"use strict";

///////////////////////////////////////////////////////////
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function calcFahrToCels(fahrenheit) {
  let f = fahrenheit;
  let fahrToCels = ((f - 32) * 5) / 9;
  console.log(
    `The temperature of ${fahrenheit} fahrenheit degrees is ${fahrToCels} celsius degrees`
  );
}
calcFahrToCels(140);

function calcCelsToFahr(celsius) {
  let c = celsius;
  let celsToFahr = (c * 9) / 5 + 32;
  console.log(
    `The temperature of ${celsius} celsius degrees is ${celsToFahr} fahrenheit degrees`
  );
}
calcCelsToFahr(60);
