"use strict";

// let submitBtn = document.getElementById("submit");

// submitBtn.addEventListener("click", (e) => {
//   let userInput = document.getElementById("userName");

//   console.log(userInput.value);
// });

let submitBtn = document.getElementById("submit");
let userInput = document.getElementById("userName");
let writeHello = document.getElementById("writeHello");
// submitBtn.addEventListener("click", e => {
//     writeHello.textContent = "Hello " + userInput.value + "!";
// });
submitBtn.addEventListener("click", function () {
  writeHello.textContent = "Hello " + userInput.value + "!";
});
