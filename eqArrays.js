const assertEqual = function(actual, expected) {


  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion passed:  ${actual} ===  ${expected} `);
    return;
  }
    
  if (actual !== expected) {
    let returnOne = console.log(`🔴🔴🔴🔴🔴 Assertion failed:  ${actual} !==  ${expected}`);

    return returnOne;
  }

}


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



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
