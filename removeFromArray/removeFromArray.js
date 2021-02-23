const removeFromArray = function (arr, ...nums) {
  let filterArr = [...arr];
  nums.forEach(function (num) {
    if (filterArr.includes(num)) {
      idx = filterArr.indexOf(num);
      filterArr.splice(idx, 1)
    }
  })

  return filterArr
}

module.exports = removeFromArray
