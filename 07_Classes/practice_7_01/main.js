"use strict";

class Dog {
  constructor(param1, param2, param3, param4) {
    this.dogName = param1;
    this.weight = param2;
    this.color = param3;
    this.breed = param4;
  }
  dogDiscription() {
    console.log(
      `This dog name is ${this.dogName}, it weights ${this.weight} kg, it is color ${this.color} and breed ${this.breed}`
    );
  }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog);

let dog2 = new Dog("C#", 10, "black", "labrador");
console.log(dog2);

dog.dogDiscription();
dog2.dogDiscription();
