const ftoc = function(tempFahr) {
  tempCel = (tempFahr - 32) / 1.8
  tempCelRound = Math.round(tempCel * 10) / 10
  return tempCelRound
}

const ctof = function(tempCel) {
  tempFahr = tempCel * 1.8 + 32
  tempFahrRound = Math.round(tempFahr * 10) / 10
  return tempFahrRound
}

module.exports = {
  ftoc,
  ctof
}
