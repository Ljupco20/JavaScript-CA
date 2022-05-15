'use strict';
const theList = [
  'Laurence',
  'Svekis',
  true,
  35,
  null,
  undefined,
  { test: 'one', score: 55 },
  ['one', 'two'],
];

const change = theList.pop();
console.log(change);
console.log(theList);

theList.shift();
console.log(theList);
theList.unshift('FIRST');
console.log(theList);
theList[3] = 'hello world';
theList[2] = 'MIDDLES';
theList.push('LAST');
console.log(theList);
theList.splice(4, 3);
console.log(theList);

const company = [
  {
    name: 'Sony',
    model: 'ps5',
  },
  { name: 'Microsoft', model: 'xbox' },

  { name: 'Konami', model: 'nintendo' },
];
console.log(company);
