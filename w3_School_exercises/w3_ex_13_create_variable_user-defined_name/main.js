"use strict";

///////////////////////////////////////////////////////////
// let name = prompt(`Enter your name`);
// console.log(name);

let name = "Ljupco";
let number = 36;
this[name] = number;
console.log(this[name]);

////////////////////////////

function user(username) {
  let obj = {};
  obj[username] = {};

  let arr = ["age", "gender", "occupation"];

  for (let bio of arr) {
    let ask = prompt(`Please enter your ${bio}`);
    obj[username][bio] = ask;
  }

  return obj;
}
console.log(user("John Doe"));
