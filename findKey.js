const assertEqual = require("./assertEqual");

const findKey = function(object, callback) {
  let keyOfObject = Object.keys(object);
  let trueKey = [];
  let findThisKey;
  for (let x = 0; x < keyOfObject.length; x++) {
    trueKey.push(callback(object[keyOfObject[x]]));
  }
  for (let i = 0; i < trueKey.length; i++) {
    if (trueKey[i]) {
      findThisKey = keyOfObject[i];
      return findThisKey;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

module.exports = findKey;