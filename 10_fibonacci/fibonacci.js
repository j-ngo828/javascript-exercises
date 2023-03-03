const fibonacci = function (n) {
  if (typeof n === "number" && n < 1) return "OOPS";
  if (typeof n === "string") n = parseInt(n);
  let first = 1;
  let second = first;
  if (n === 1 || n === 2) {
    return first;
  }
  let result = 0;
  for (let i = 3; i <= n; ++i) {
    result = first + second;
    first = second;
    second = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
