"use strict";

let myNameArray = ["Boban", "Kristijan", "Andrej", "Ilija", "Lubco", "Angel"];
let myElements = document.getElementsByTagName("div");
function build() {
  myElements.output.innerHTML = "<table name='html'></table>";
  let myTable = document.getElementsByName("html")[0];
  myNameArray.forEach((element, index) => {
    myTable.innerHTML +=
      "<tr data-row ='" +
      (index + 1) +
      "' data-name ='" +
      element +
      "' onclick='getData(this)'><td>" +
      element +
      "</td><td class='box'>" +
      (index + 1) +
      "</td></tr>";
  });
}
build();
function getData(elem) {
  myElements.message.innerText =
    elem.getAttribute("data-name") + " " + elem.getAttribute("data-row");
}
