"use strict";

let userInput = document.getElementById("addItem");
let btnAddNew = document.getElementById("addNew");
let listOfItems = document.getElementById("sList");
btnAddNew.addEventListener("click", addItem);
userInput.addEventListener("keydown", onEnter);
function onEnter(e) {
  console.log("test");
  if (e.keyCode === 13) {
    addItem();
  }
}
function addItem() {
  let userItem = userInput.value;
  if (userItem !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = userItem;
    listOfItems.appendChild(listItem);
  }
}
