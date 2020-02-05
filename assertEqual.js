const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🟢🟢🟢🟢🟢 Assertion passed:  ${actual} ===  ${expected} `);
    return;
  }if (actual !== expected) {
    let returnOne = console.log(`🔴🔴🔴🔴🔴 Assertion failed:  ${actual} !==  ${expected}`);
    return returnOne;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);