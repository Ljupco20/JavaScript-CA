"use strict";

class Employees {
  constructor(firstname, lastname, yearsWorked) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearsWorked = yearsWorked;
  }
}
let arr = [];
let employee1 = new Employees("Wayne", "Rooney", 15);
let employee2 = new Employees("Marcus", "Rashford", 6);
let employee3 = new Employees("Aurelien", "Tchouameni", 6);

arr.push(employee1, employee2, employee3);

Employees.prototype.employeesDetails = function () {
  return `${this.firstname} ${this.lastname} has worked in our company for ${this.yearsWorked} years now`;
};

// employee1.employeesDetails();

arr.forEach((element) => {
  console.log(element.employeesDetails());
});
