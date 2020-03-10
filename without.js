const without = function (arr, itemsToRemove) {
  const arr = [];
  for (let x = 0; x < arr.length; x++) {
    if (!itemsToRemove.includes(arr[x])) {
      newArray.push(arr[x]);
    }
  } return newArray;
};

module.exports = without;