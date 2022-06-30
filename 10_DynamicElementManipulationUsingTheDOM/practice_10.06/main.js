"use strict";

window.onload = function () {
  document.getElementById("square").addEventListener("click", changeColor);
  function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // console.log(this);
    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
};
