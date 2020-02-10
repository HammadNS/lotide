const eqObjects = function(object1, object2) {
  var objectListOne = Object.keys(object1);
  var objectListTwo = Object.keys(object2);
  if (objectListOne.length != objectListTwo.length) {
    console.log("Ending at Line 27");
    return false;
  } else {
    for (key of objectListOne) {
      console.log("Ending at Line 31"[key]);
      if (Array.isArray(objectListOne[key]) == true) {
        console.log("Loop ending at Line 33");
        return eqArrays(objectListOne, objectListTwo);
      } else {
        if (objectListOne[key] !== objectListTwo[key]) {
          console.log("Loop ending at Line 37" + [key]);
          return false;
          // } else {
          //   console.log("Loop ending at line 40");
          //   return false;
        }
        return true;
      }
    }
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect; // <= add this line
  if (eqObjects(object1, object2) == true) {
    console.log(
      `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

module.exports = assertObjectsEqual;