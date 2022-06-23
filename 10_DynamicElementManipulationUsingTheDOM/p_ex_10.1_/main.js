"use strict";

// console.dir(
//   (document.body.childNodes[1].childNodes[1].childNodes[1].childNodes.textcontent =
//     "green")
// );
// console.dir((document.body.childNodes[3].style = "color: blue"));
// console.dir((document.body.childNodes[5].style = "color: green"));
// console.dir((document.body.childNodes[7].style.color = " yellow"));

///////////////////////////////////////////

console.dir(
  document.body.children[0].children[0].children[0].children[1].innerText
);

console.dir(
  document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[3]
    .textContent
);

document.body.children[0].children[1].style.color = "blue";
document.body.children[0].children[2].style = "color: green";
document.body.children[0].children[3].style = "background-color: yellow";
document.body.children[0].children[4].style.backgroundColor = "purple";
