"use strict";

class Employees {
  constructor(firstname, lastname, yearsWorked) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearsWorked = yearsWorked;
  }
}

let employee1 = new Employees("Wayne", "Rooney", 15);
let employee2 = new Employees("Marcus", "Rashford", 6);
let employee3 = new Employees("Aurelien", "Tchouameni", 6);

let arr = [employee1, employee2, employee3];

Employees.prototype.employeesDetails = function () {
  console.log(
    `${this.firstname} ${this.lastname} has worked in our company for ${this.yearsWorked} years now`
  );
};

// employee1.employeesDetails();

for (let i = 0; i < arr.length; i++) {
  arr[i].employeesDetails();
}
