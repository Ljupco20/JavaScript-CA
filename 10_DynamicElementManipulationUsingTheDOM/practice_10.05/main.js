"use strict";

function toggleDisplay() {
  let p = document.getElementById("magic");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}

function toggleDisplay2() {
  document.getElementById("magic").classList.toggle("hide");
}
