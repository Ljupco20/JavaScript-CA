"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullname() {
    return this.firstName + " " + this.lastName;
  }
}

let filip = new Person("Filip", "Trajanovski");
console.log(filip);

let marijana = new Person("Marijana", "Elenova");
console.log(marijana);

let ljupco = new Person("Ljupco", "Trajanovski");
console.log(ljupco.firstName, ljupco.lastName);

let blaica = new Person("Blagica", "Trajanovska");
console.log(`This is ${blaica.firstName} ${blaica.lastName}`);

let petar = new Person("Petar", "Petrovski");
console.log(petar.fullname());
