"use strict";

let dailyActivities = ["eat", "sleep", "fly"];

console.log("------------- push() -----------");
// add an element at the end
dailyActivities.push("workout");

console.log(dailyActivities);

console.log("------------- unshift() -----------");
//add an element at the start
dailyActivities.unshift("study");

console.log(dailyActivities);

dailyActivities[3] = "swim";

console.log(dailyActivities);

console.log("------------- pop() -----------");
// remove the last element
dailyActivities.pop();
console.log(dailyActivities);

//get removed element
const removedEl = dailyActivities.pop();
console.log(removedEl);
console.log(dailyActivities);

// remove the first element
const removeFirstElement = dailyActivities.shift();
console.log(removeFirstElement);
console.log(dailyActivities);
