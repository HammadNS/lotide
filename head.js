const assertEqual = function(actual, expected) {

  //let angryface = 🔴;

  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion passed:  ${actual} ===  ${expected} `);
    return;
  }
    
  if (actual !== expected) {
    let returnOne = console.log(`🔴🔴🔴🔴🔴 Assertion failed:  ${actual} !==  ${expected}`);

    return returnOne;
  }

}

//var head = [];
//var first = function(head) {
  let head = function(array) {

    return array[0];

  }
  
  module.exports = head;
  













assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

