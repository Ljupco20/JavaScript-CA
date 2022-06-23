"use strict";

function message(param) {
  console.dir(param);
  console.log(param);
  console.log(param.textContent);
  param.textContent = "changed button after click";
  param.style = "color: white; background-color: red";
}
