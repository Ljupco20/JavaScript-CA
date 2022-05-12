'use strict';

let company = {
  companyName: 'Healthy Candy',
  activities: [
    'food manufacturing',
    "improving kid's health",
    'manufacturing toys',
  ],
  address: {
    street: '2nd street',
    number: '123',
    zipcode: '33116',
    city: 'Miami',
    state: 'Florida',
  },
  yearsOfEstablishment: 2021,
};
console.log(company);

console.log(company.address.zipcode);
console.log('-------New value for zipcode----------');

company.address.zipcode = '33117';
console.log(company.address.zipcode);

console.log('----------------------------------------');
console.log(company.address.number);
company['address']['number'] = '100';

console.log('-------New value for address number----------');
console.log(company.address.number);
let activity = company.activities[1];
console.log(activity);
