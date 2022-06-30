// let title = document.querySelectorAll(".title");
// let myText = document.querySelectorAll(".myText");
// title.forEach((element, index) => {
//   element.addEventListener("click", nextSibling);
// });
// function nextSibling() {
//   this.nextElementSibling.classList.toggle("active");
// }
window.onload = function () {
  let titleArr = document.getElementsByClassName("title");
  console.log();
  for (let i = 0; i < titleArr.length; i++) {
    const element = titleArr[i];
    element.addEventListener("click", myFunction);
  }
  function myFunction() {
    if (this.nextElementSibling.classList.contains("active")) {
      this.nextElementSibling.classList.remove("active");
    } else {
      this.nextElementSibling.classList.add("active");
    }
  }
};
