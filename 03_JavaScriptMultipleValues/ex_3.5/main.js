let people = {
  friends: [],
};

let friend1 = {
  firstName: 'Ljupcho',
  lastName: 'Trajanovski',
  id: 1,
};

let friend2 = {
  firstName: 'Fico',
  lastName: 'Trajanovski',
  id: 2,
};

let friend3 = {
  firstName: 'Marijana',
  lastName: 'Elenova',
  id: 3,
};

const add = people.friends.push(friend1, friend2, friend3);

console.log(people);
