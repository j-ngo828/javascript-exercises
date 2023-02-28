const leapYears = function (year) {
  if (!Number.isInteger(year)) return "ERROR";

  if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
