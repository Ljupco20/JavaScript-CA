let users = ["Marks", "James", "Peter", "Jane", "Mary"];

let input = document.getElementById("addFriend");

let but = document.getElementById("addNew");

let table = document.getElementById("output");
let vote = 0;

function addUsers() {
  let template = users.map(
    (x) => `<tr onclick='voteFunction(this)'><td>${x}</td><td>${vote}</td></tr>`
  );
  console.log(template);
  table.innerHTML = template;
}

addUsers();

but.addEventListener("click", addFriend);

function addFriend() {
  let lenght = users.push(input.value);
  table.innerHTML += `<tr onclick='voteFunction(this)'><td>${
    input.value
  }</td><td>${0}</td></tr>`;
  input.value = "";
}

function voteFunction(element) {
  let voting = parseInt(element.children[1].innerText);
  voting++;
  element.children[1].innerText = voting;
}
