"use strict";

// document.querySelectorAll("button");

let btnArray = document.getElementsByTagName("button");

for (let i = 0; i < btnArray.length; i++) {
  btnArray[i].addEventListener("click", output);
}

function output() {
  // console.log(this.textContent);
  console.log(this.innerText);
}
