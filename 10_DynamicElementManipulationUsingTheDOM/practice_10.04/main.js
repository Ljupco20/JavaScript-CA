"use strict";
function stop() {
  alert("Ouch! Stop it");
}
function stop2() {
  prompt("Ouch! Stop it");
}

document.getElementById("four").onclick = function () {
  confirm("Auch! you clicked me");
};

function reveal(params) {
  console.log(params);
  console.log(params.textContent);
  params.textContent = "I'm clicked";
  params.style = "color: white; background-color: green";
}
