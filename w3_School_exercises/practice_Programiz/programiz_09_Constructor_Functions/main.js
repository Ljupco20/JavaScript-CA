"use strict";
//  JavaScript Constructor Functions

// function Person1() {
//   this.firstname = "Ljupco";
//   this.age = 36;

//   this.greet = function () {
//     console.log(`Hello ${this.firstname}`);
//   };
// }

// const person1 = new Person1();

// console.log(person1);
// person1.greet();

// const person2 = new Person1();

// console.log(person2);
// person2.greet();

console.log("----------------------------------------");

// function Person(p_name, p_age, p_gender) {
//   this.name = p_name;
//   this.age = p_age;
//   this.gender = p_gender;
//   this.greet = function () {
//     return `Hello, my name is ${this.name}, I'm ${this.age} old ${this.gender}`;
//   };
// }

// const person1 = new Person("Marijana", 32, "female");

// console.log(person1);
// console.log(person1.name);
// console.log(person1.greet());

// const person2 = new Person("Ljupco", 36, "male");

// console.log(person2);
// console.log(person2.name);
// console.log(person2.greet());

console.log("----------------------------------------");
// Create Objects: Constructor Function Vs Object Literal

// function Person() {
//   this.name = "Petar";
// }
// let person1 = new Person();
// let person2 = new Person();

// console.log((person1.age = 36));

let str = new String();
const bool = new Boolean();
const obj = new Object();
const num = new Number();

str = "Ljupco";
console.log(str);
