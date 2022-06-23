"use strict";

class Person2 {
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

let per = new Person2("Marijana", "Elenova");
console.log(per.firstname);
let per2 = new Person2("Adnane", "Winks");
console.log(per2.firstname);

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

////////////////////////////////////////////////////////////////
console.log("----------------------------------------------");
class Person {
  #firstname;
  #lastname;

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstnameGet() {
    return this.#firstname;
  }
  set firstnameSet(firstname) {
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

let p = new Person("Maria", "Saga");
console.log(p);

let p2 = new Person("adnan", "Saga");
console.log(p2);
p2.firstnameSet = "adnan";
console.log(p2.firstnameGet);
console.log(p2.lastname);
