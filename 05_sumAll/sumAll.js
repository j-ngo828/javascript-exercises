const sumAll = function (firstNum, secondNum) {
  if (
    typeof firstNum !== "number" ||
    typeof secondNum !== "number" ||
    firstNum < 0 ||
    secondNum < 0
  ) {
    return "ERROR";
  }
  let total = 0;
  for (
    let i = Math.min(firstNum, secondNum);
    i <= Math.max(firstNum, secondNum);
    ++i
  ) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
