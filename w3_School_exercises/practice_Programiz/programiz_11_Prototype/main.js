"use strict";
// constructor function
function Person() {
  (this.name = "Michael"), (this.age = 23);
}
// creating objects
const person1 = new Person();
const person2 = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }

// adding property to constructor function
Person.prototype.gender = "male";

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// adding a method to the constructor function
Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

person1.greet();
person2.greet();

// add a property
Person.prototype.height = 180;

console.log(person1.height);

// changing the property value of prototype
Person.prototype = { height: 200 };

const person3 = new Person();

console.log(person3.height);
console.log(person1.height);

// adding property
Person.prototype.name = "Peter";
Person.prototype.color = "black";

const person4 = new Person();
console.log(person4.name);
console.log(person4.color);

// adding a prototype
Person.prototype.weight = 80;

// creating object
const person5 = new Person();

// accessing prototype property
console.log(person5.__proto__);
