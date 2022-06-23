"use strict";

let mojotArej = ["grapefruit", 4, "hello", 5.6, true];
​
function printStuff(ele, ind) {
   // console.log("Element: ", ele);
   // console.log("Type of element: ",typeof ele);
   // console.log("Index: ", ind);
}
​
mojotArej.forEach(printStuff);
​
​
mojotArej.forEach((element, index) => {
   printStuff(element, index)
});
​
//console.log("-----------------------------------");
​
​
for (let i = 0; i < mojotArej.length; i++) {
   printStuff(mojotArej[i], i);
}
​
let mojVtorAraj = ["squirrel", 5, "Tjed", new Date(), true];
​
function checkString(element, y) {
   return typeof element === "string";
}
​
let filtriranArej = mojVtorAraj.filter(checkString);
///.log(filtriranArej);
​
// function bobiFilter(nefiltriranArray) {
//    let novAraj = [];
//    for (let i = 0; i < nefiltriranArray.length; i++) {
//       const element = nefiltriranArray[i];
//       if (typeof element === "string") {
//          novAraj.push(element);
//       }
//    }
//    return novAraj;
// }
​
// let novFiltriranArej = bobiFilter(mojVtorAraj);
// console.log(novFiltriranArej);
​
mojotArej.copyWithin(1,2,5);
//console.log(mojotArej);
​
let mojArejSoBrojki = [1,2,3,4,5];
​
function nasaFunkcijaZaVrakjanjeRezultat(param1, param2, param3) {
   return param1 * 2;
}
console.log(mojArejSoBrojki);
​
let mapiranArej = mojArejSoBrojki.map(x => x + 3)
console.log(mapiranArej);
​
​
function bobiMap(arejSoBrojki) {
   let mapiranArr = [];
​
   for (let i = 0; i < arejSoBrojki.length; i++) {
      const element = arejSoBrojki[i] + 1;
      mapiranArr.push(element);
   }
  
   return mapiranArr;
}