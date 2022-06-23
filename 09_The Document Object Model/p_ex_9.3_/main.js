"use strict";
let myHtmlObject = document.querySelector(".output");

//console.dir(myHtmlObject);
console.log(myHtmlObject.textContent);

if (myHtmlObject !== null) {
  myHtmlObject.textContent = "Prviot promenet tekst";
  myHtmlObject.classList.add("red");
  myHtmlObject.classList.add("white");
  myHtmlObject.id = "tester";
  document.body.style.backgroundColor = "red";
  myHtmlObject.textContent = document.URL;
}

console.dir(myHtmlObject);
