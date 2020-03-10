

const flatten = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // newString += ((string[i]) + "" )
    if (Array.isArray(arr[i]) === false) {
      result.push(arr[i]);
    } else {
      result = output.concat(arr[i]);
    }
  }
  return result;
};

module.exports = flatten;