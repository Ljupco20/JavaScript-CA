"use strict";

let main = document.querySelector("#main");

console.dir(
  main.children[1].children[1].children[1].children[0].children[2].textContent
);

console.dir((main.children[0].innerText = "<p> new paragraph</p>"));
console.dir((main.children[0].innerHTML = "<p> new paragraph</p>"));
