const eqArrays = function(arrayOne, arrayTwo) {

  let str = "";
  for (let i = 0; i < arrayOne.length; i++) {
   for (let a = 0; a < arrayTwo.length; a++) {
      if (arrayOne[i] === arrayTwo[a]) {

        str = true;

      } 
      
      else {
        str = false;
      }
    }
  } return str;
}


const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`🟢🟢🟢🟢🟢Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🔴🔴🔴🔴🔴Assertion Failed: ${a} !== ${b}`);
  }
}



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
  return results;
};


console.log(assertArraysEqual(letterPositions("hello").e, [1]));

