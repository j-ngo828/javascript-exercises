const repeatString = function (str, n) {
  if (n < 0) {
    return "ERROR";
  }
  let repeatedStr = "";
  for (let i = 0; i < n; ++i) {
    repeatedStr += str;
  }
  return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
