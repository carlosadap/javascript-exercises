const sumAll = function (num1, num2) {
  if (badNums(num1, num2)) {
    return 'ERROR'
  }  

  sum = 0
  
  if (num1 <= num2) {
    start = num1  
    end = num2
  } else {
    start = num2
    end = num1
  }

  for (start; start <= end; start++) {
    sum += start
  }

  return sum
}

const badNums = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return true
  }

  if (isNotNumber(num1) || isNotNumber(num2)) {
    return true
  }

  return false
}

const isNotNumber = function isNumber(value) {
  return typeof value !== 'number' ||
    !isFinite(value);
}

module.exports = sumAll
