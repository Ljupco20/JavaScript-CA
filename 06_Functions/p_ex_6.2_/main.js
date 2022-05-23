"use strict";

const arrActions = ["working", "learning", "reading", "swiming", "sleeping"];

let peopleActivities = function () {
  let name = prompt("Please enter your name: ");
  let ranQuestion = Math.floor(Math.random() * 5);

  return `${name} is ${arrActions[ranQuestion]}`;
};

console.log(peopleActivities());
