"use strict";

///////////////////////////////////////////////////////
console.log("--Recursive f - sum of natural numbers--");

function recursiveSummation(inputNum) {
  if (inputNum <= 1) {
    return inputNum;
  }
  return inputNum + recursiveSummation(inputNum - 1);
}

console.log(recursiveSummation(5));

///////////////////////////////////////////////////////
console.log("--Recursive f - Binary search--");

// function binarySearch(arr, num, startIndex, endIndex) {
//   if (startIndex > endIndex) {
//     return -1;
//   }
//   let midIndex = Math.floor((startIndex + endIndex) / 2);

//   if (num === arr[midIndex]) {
//     return midIndex;
//   }
//   if (num < arr[midIndex]) {
//     return midIndex;
//   }
//   return binarySearch(arr, num, startIndex, midIndex - 1);
// }
// let arr = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20];
// let num = 10;

// if (binarySearch(arr, num, 0, arr.length - 1))
//   document.write("Element found!<br>");
// else document.write("Element not found!<br>");

// console.log(binarySearch(arr, num, 0, arr.length - 1));

let recursiveFunction = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};

// Driver code
let arr = [-1, 0, 1, 2, 3, 4, 7, 9, 10, 20];
let x = 10;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  document.write("Element found!<br>");
else document.write("Element not found!<br>");

console.log(recursiveFunction(arr, x, 0, arr.length - 1));

///////////////////////////////////////////////////////
console.log("--Recursive f - Fibonnaci--");

function fib(num) {
  if (num === 0 || num === 1) return num;
  else return fib(num - 1) + fib(num - 2);
}

console.log(fib(9));
