const palindromes = function(str) {
  const array = str.split("");
  const lettersArray = array.filter(char => isLetter(char));
  const lettersArrayReversed = reverseArr(lettersArray);
  return arrayToString(lettersArray) === arrayToString(lettersArrayReversed);
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function reverseArr(array) {
  const reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

function arrayToString(array) {
  return array.join("").toLowerCase()
}

palindromes('ZZZZ car, a man, a maraca.')

module.exports = palindromes
