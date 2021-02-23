const reverseString = function(str) {
  arrStr = str.split("")
  arrSize = arrStr.length
  newArr = []
  while (arrSize >= 0) {
    newArr.push(arrStr.pop())
    arrSize--
  }

  return newArr.join("")
}

module.exports = reverseString
