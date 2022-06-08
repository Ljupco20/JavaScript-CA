"use strict";

///////////////////////////////////////////////////////////

function removeChar(str, char_pos) {
  let strPart1 = str.substring(0, char_pos);
  let strPart2 = str.substring(char_pos + 1, str.length);

  return strPart1 + strPart2;
}

console.log(removeChar("JavaScript", 5));
console.log(removeChar("JavaScript", 0));
console.log(removeChar("JavaScript", 3));
