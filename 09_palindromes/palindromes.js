const palindromes = function (str) {
  const isAlpha = (ch) =>
    typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
  const cleanUp = (str) => {
    let result = "";
    for (char of str) {
      if (isAlpha(char)) {
        result += char.toLowerCase();
      }
    }
    return result;
  };
  const trimmed = cleanUp(str);
  const trimmedHalfLen = Math.floor(trimmed.length / 2);
  for (let i = 0; i < trimmedHalfLen; ++i) {
    if (trimmed[i] !== trimmed[trimmed.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
