let myCar = {
  make: 'Ferrari',
  model: 'SF90 Stradale',
  color: 'red',
  automatic: true,
  drive: function () {
    return 'yes';
  },
  brakes: function () {
    return true;
  },
  ariving: function (distance, time) {
    return distance / time;
  },
};

let col = 'color';

myCar[col] = 'yellow';

////////// You can use the same variable for new property and value
col = 'forSale';

myCar[col] = 'true';
console.log(myCar.model);
console.log(myCar.forSale);
console.log(myCar);
console.log(myCar.drive());
console.log(myCar.brakes());
console.log(myCar.ariving(200, 2));
