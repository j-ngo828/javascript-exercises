const removeFromArray = function (arr, ...elemsToRemove) {
  return arr.filter((elem) => !elemsToRemove.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
