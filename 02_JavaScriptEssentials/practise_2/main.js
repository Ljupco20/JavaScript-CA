let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);



testVariable = 1;
variableTypeTest1 =typeof testVariable;
variableTypeTest2 =typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof (nrToStr));

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof(strToNr));


let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof(strToBool));


let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof (nullToNr));


let strToNr = " ";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof (strToNr));



