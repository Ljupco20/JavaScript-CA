"use strict";
//  JavaScript Getter and Setter

const student = {
  // data property
  firstname: "Monica",

  // accessor property(getter)
  get getName() {
    return this.firstname;
  },

  //accessor property(setter)
  set setName(newName) {
    return (this.firstname = newName);
  },
};
// accessing data property
console.log(student.firstname);

// accessing getter methods
console.log(student.getName);

// change(set) object property using a setter
student.setName = "Ljupco";
console.log(student.firstname);

////////////////////////////////////////////////////
console.log("-- Object.defineProperty(obj, prop, descriptor) --");
// Object.defineProperty(obj, prop, descriptor)

const fighter = {
  firstName: "Connor",
};

// getting property
Object.defineProperty(fighter, "getName1", {
  get: function () {
    return this.firstName;
  },
});

// setting property
Object.defineProperty(fighter, "changeName1", {
  set: function (newVal) {
    set: this.firstName = newVal;
  },
});

console.log(fighter.firstName);

// changing the property value
fighter.changeName1 = "Mike";

console.log(fighter.firstName);
