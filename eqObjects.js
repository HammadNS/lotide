const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
          
        }
        return true;
      }
    }
  }
};
module.exports = eqObjects;