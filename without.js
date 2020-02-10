const without = function(origArray, itemsToRemove) {
  const newArray = [];
  for (let x = 0; x < origArray.length; x++) {
    if (!itemsToRemove.includes(origArray[x])) {
      newArray.push(origArray[x]);
    }
  } return newArray;
};

module.exports = without;