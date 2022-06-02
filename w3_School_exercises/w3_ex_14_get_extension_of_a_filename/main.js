"use strict";

///////////////////////////////////////////////////////////

let filename = "main.js";
filename = filename.split(".").pop();
console.log(filename);

console.log("-------- with functions ---------");

function extensionOfFilename(name) {
  let filename = name.split(".").pop();
  console.log(filename);
}
extensionOfFilename("index.html");
