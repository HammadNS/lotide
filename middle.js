const middle = function (array) {
  let arr = []
  let index = Math.floor(array.length / 2)
  if (array.length <= 2) {
    return arr
  }
  else if (array.length % 2 === 0) {
    arr.push(array[(index) - 1])
    arr.push(array[(index)])
  }
  else {
    arr.push(array[index])
  }
  return arr
}

module.exports = middle;