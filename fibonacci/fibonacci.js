const fibonacci = function(num) {
  let newNum = parseInt(num);
  if (newNum === 1 || newNum === 2) {
    return 1
  } else if (parseInt(newNum) < 1) {
    return "OOPS"
  }

  return fibonacci(newNum - 1) + fibonacci(newNum - 2)
}

module.exports = fibonacci
