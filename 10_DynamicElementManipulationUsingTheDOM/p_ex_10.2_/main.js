"use strict";

console.log(document.getElementById("list"));
console.log(document.getElementById("secTitle"));
console.log(document.getElementById("secParagraph"));

let myList = ["Bananas", "Apples", "Milk", "Chocolate"];
document.getElementById("list").innerHTML = "";
myList.forEach((element) => {
  document.getElementById("list").innerHTML += "<li>" + element + "</li>";
});
