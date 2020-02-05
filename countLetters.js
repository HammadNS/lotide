const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion passed:  ${actual} ===  ${expected} `);
    return;
  }if (actual !== expected) {
    let returnOne = console.log(`🔴🔴🔴🔴🔴 Assertion failed:  ${actual} !==  ${expected}`);
    return returnOne;
  }
}
//The function should take in a sentence (as a string) 
//and then return a count of each of the letters in that sentence.

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