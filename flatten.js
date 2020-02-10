

const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    // newString += ((string[i]) + "" )
    if (Array.isArray(arr[i]) === false) {
      output.push(arr[i]);
    } else {
      output = output.concat(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;