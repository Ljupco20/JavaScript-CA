"use strict";

function Dog1(dogName, weight, color, breed) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
}

let do1g = new Dog1("Jacky", 30, "brown", "labrador");

class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

let dog = new Dog("Nala", 20, "black", "labrador");

console.log(
  `My dog's name is ${dog.dogName}, she weights ${dog.weight}kg and she is ${dog.color} ${dog.breed}`
);
console.log("-------------------------------------------------");

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there! I'm", this.firstname);
  }

  compliment(name, object) {
    return `That's a wonderful ${object}, ${name} `;
  }
  fullname() {
    return this.firstname + " " + this.lastname;
  }
}

let friend = new Person("Petar", "Petrovski");
let friend2 = new Person("John", "Smith");
console.log(friend);
console.log(friend.firstname, friend.lastname);
console.log(`Hi ${friend.firstname} ${friend.lastname}`);

friend.greet();

console.log(friend.compliment(friend.firstname, "ball"));

console.log(friend.fullname());
console.log(friend2.fullname());
console.log("------------------ prototype ---------------------");

Person.prototype.introduce = function () {
  console.log(console.log("Hi, I'm", this.firstname));
};
Person.prototype.favoriteColor = "blue";

console.log(friend.favoriteColor);
friend.introduce();
