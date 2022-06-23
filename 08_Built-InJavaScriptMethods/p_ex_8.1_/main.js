"use strict";

let uri = "How's%20it%20going%3F";
let encodedUri = encodeURIComponent(uri);
console.log("Encoded:", encodedUri);
let decodedUri = decodeURIComponent(uri);
console.log("Decoded:", decodedUri);
let newEncodedUri = encodeURIComponent("https://basescripts.com?=Hello World");
console.log(newEncodedUri);
