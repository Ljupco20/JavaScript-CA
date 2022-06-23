"use strict";

console.dir(
  document.body.children.forrest.children.tree2.children.shrubbery.children
    .treasure.id
);

console.dir(
  document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1].id
);

let treasure = document.getElementById("treasure");
console.dir(treasure.parentElement.parentElement.parentElement);
console.dir(treasure.parentNode.parentNode.parentNode);
