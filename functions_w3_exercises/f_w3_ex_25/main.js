"use strict";

///////////////////////////////////////////////////////////
let arrCountry = ["Australia", "Germany", "United States of America"];

function longestCountryName(arr) {
  let longestName = "";

  //   if (typeof arr === "object" && arr.length > 0) {
  //     for (let i = 0; i < arr.length; i++) {
  //       let element = arr[i];
  //       if (longestName === "") {
  //         longestName = element;
  //       } else if (longestName.length < element.length) {
  //         longestName = element;
  //       }
  //     }
  //     return longestName;
  //   } else {
  //     return longestName;
  //   }
  // }

  if (typeof arr === "object" && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      longestName = longestName.length < arr[i].length ? arr[i] : longestName;
    }
    return longestName;
  }
}

let longestName = longestCountryName(arrCountry);
console.log(longestName, longestName.length);
