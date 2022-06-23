"use strict";

let firstStr = "Zdravo ";
let secondtStr = "Svetu!";

console.log(firstStr + secondtStr);
console.log(firstStr.concat(secondtStr, "!!"));
console.log(firstStr.concat(secondtStr));
console.log(firstStr.concat(secondtStr, 5));

let result = "Hello JavaScript how are you?";
let arr_result = result.split(" ");
console.log(arr_result);

let result2 = "Boban,Ljupco,Simona,Barbara";
let arr_result2 = result2.split(",");
console.log(arr_result2);

arr_result2.forEach((element) => {
  let hello = "Hello ";
  console.log(hello.concat(element));
});

let strArr = ["H", "e", "l", "l", "o"];

console.log(strArr.join());
console.log(strArr.join("-"));

let poem = "Roses are red, violets are blue if I can do JS, then you can too!";

let index_re = poem.indexOf("re");
console.log(index_re);

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);
///////////////////////////////////////////////////////
console.log('------------ .search("lo") -------------');
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

///////////////////////////////////////////////////////
console.log("-------------- .slice(5) --------------");
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
console.log("1:", substr1);
console.log("2:", substr2);

///////////////////////////////////////////////////////
console.log("-------------- .replace() --------------");
let hi = "buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
let new_s33 = s3.replaceAll("hello", "oh");
console.log(new_s3);
console.log(new_s33);
