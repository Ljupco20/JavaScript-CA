"use strict";

function sumofTwoNum(num1, num2) {
  return num1 + num2;
}

////////////////////////////////////////////////

(function () {
  console.log("Samopovikuvacka funkcija!");
})();

////////////////////////////////////////////////
(function (num1, num2) {
  console.log(num1 + num2);
})(3, 5);

////////////////////////////////////////////////

(() => {
  console.log("Samopovikuvacka arrow funkcija");
})();

////////////////////////////////////////////////

(() => {
  let edna = 5;
  let druga = 10;
  console.log(edna + druga);
})();
