'use strict';

let dog = {
  name: 'Kuce',
  weight: 2.4,
  color: 'dark',
  breed: 'Labrador Retriever',
  age: '1',
  biting: true,
};
let arrDog = [];

console.log(typeof dog);
console.log(typeof arrDog);

console.log(`My dog's name is ${dog.name}, she weights ${dog.weight} kg`);

dog.name = 'Nala';
console.log(dog.name);
console.log(`My dog's name is ${dog.name}, she weights ${dog.weight} kg`);
