"use strict";

let number;

do {
  number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
{
  console.log(number);
}
