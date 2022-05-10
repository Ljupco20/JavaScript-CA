'use strict';
let shoppingList = [];

console.log(shoppingList);

shoppingList.push('Milk', 'Bread', 'Apples');

console.log(shoppingList);

shoppingList.splice(1, 1, 'Bananas', 'Eggs');

console.log(shoppingList);
shoppingList.sort();

console.log(shoppingList);
let milkIndex = shoppingList.indexOf('Milk');

shoppingList.splice(2, 0, 'Carrots', 'Letuce');

let shoppingList2 = ['Juice', 'Pop'];

const shoppingList3 = shoppingList.concat(shoppingList2, shoppingList2);
console.log(shoppingList3);

let PopIndex = shoppingList3.indexOf('Pop', 8);
console.log(PopIndex);
