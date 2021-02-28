const caesar = function(str, num) {
  const lowerCaseLetters = createLetters(97);
  const upperCaseLetters = createLetters(65);
  
  const charsArray = str.split("");
  const cipherArray = charsArray.map(char => {
    let charIdx, newCharIdx, length;
    if (lowerCaseLetters.includes(char)) {
      length = lowerCaseLetters.length;
      charIdx = lowerCaseLetters.findIndex(element => element === char)
      newCharIdx = (((charIdx + num) % length) + length ) % length;
      return lowerCaseLetters[newCharIdx]
    } else if (upperCaseLetters.includes(char)) {
      length = upperCaseLetters.length;
      charIdx = upperCaseLetters.findIndex(element => element === char)
      newCharIdx = (((charIdx + num) % length) + length ) % length;
      return upperCaseLetters[newCharIdx]
    } else {
      return char
    }
  })

  return cipherArray.join("")
}

function createLetters(iniCode) {
  lettersArrays = []
  for (let i = 0; i < 26; i++) {
    lettersArrays.push(String.fromCharCode(iniCode + i))
  }
  return lettersArrays;
}

module.exports = caesar
