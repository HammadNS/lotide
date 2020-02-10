const assertEqual = require("./assertEqual");

const countLetters = function(stringOb){

  let output = {};

  for(let letter of stringOb){
    if (output[letter]) {
      output[letter] += 1;
  } 
  else {
      output[letter] = 1;
  }

  }



  return output;
}
console.log(countLetters('LHL'));

console.log(countLetters("lighthouse in the house"));