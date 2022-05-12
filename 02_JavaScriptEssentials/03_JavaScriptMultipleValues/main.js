'use strict';

console.log('test');

let arr = ['hi there', 5, true];

console.log(arr);

console.log('arr firts value: ' + arr[0] + '. Is of type: ' + typeof arr[0]);
console.log('arr second value: ' + arr[1] + '. Is of type: ' + typeof arr[1]);
console.log('arr third value: ' + arr[2] + '. Is of type: ' + typeof arr[2]);

let arr2 = new Array(10);

console.log(arr2);

let colors = ['red', 'green', 'blue'];
let boolean = [true, false, false, true];
let emptyArr = [];

console.log('The lenght of the colors array is: ' + colors.length);
console.log('The lenght of the colors array is: ' + boolean.length);
console.log('The lenght of the colors array is: ' + emptyArr.length);

console.log(colors[0]);

console.log(colors[colors.length - 1]);

const shoppingList = ['Milk', 'Bread', 'Apples'];
console.log(shoppingList.length);
shoppingList[1] = 'Bananas';

console.log(shoppingList);
console.log('---------------------------------------------------------------');

let favoriteFruits = ['grapefruit', 'orange', 'lemon'];
favoriteFruits.push('tangerine');
console.log(favoriteFruits);

let lenghtOfFavoriteFruits = favoriteFruits.push('lime');
console.log('---------------------------------------------------------------');
console.log(lenghtOfFavoriteFruits);
console.log(favoriteFruits);
