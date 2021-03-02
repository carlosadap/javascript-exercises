const getTheTitles = function(array) {
  let titlesArray = array.map(book => book.title)
  return titlesArray;
}

module.exports = getTheTitles;
