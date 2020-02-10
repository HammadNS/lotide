
const assertEqual = require('./assertEqual');


const findKeyByValue = function(object, value) {
  let listOfKeys = Object.keys(object);
   for (let key of listOfKeys) {
     console.log(key);
     console.log(object[key]);

    if (object[key] == value) {
      return key
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);