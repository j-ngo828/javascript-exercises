const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; ++i) {
    result *= a;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; ++i) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
