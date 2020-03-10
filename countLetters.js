const assertEqual = require("./assertEqual");

const countLetters = function (stringOb) {

  let output = {};

  for (let letters of stringOb) {
    if (output[letters]) {
      output[letters] += 1;
    }
    else {
      output[letters] = 1;
    }

  }



  return output;
}
console.log(countLetters('LHL'));

console.log(countLetters("lighthouse in the house"));