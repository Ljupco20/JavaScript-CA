"use strict";

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    if (firstname.startsWith("M")) {
      this.#firstname = firstname;
    } else {
      this.#firstname = "M" + firstname;
    }
  }

  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

let p = new Person("Marijana", "Elenova");
console.log(p.firstname);
let p2 = new Person("Adnane", "Winks");
console.log(p2.firstname);

console.log("---------------- debuging -----------------");

function checkName(name) {
  if (name.startsWith("M")) {
    return name;
  } else {
    return "M" + name;
  }
}

console.log(checkName("ilip"));
console.log(checkName("Marijana"));
