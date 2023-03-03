const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((prevPerson, curPerson) => {
    const prevPersonAge =
      (prevPerson.yearOfDeath ? prevPerson.yearOfDeath : currentYear) -
      prevPerson.yearOfBirth;
    const curPersonAge =
      (curPerson.yearOfDeath ? curPerson.yearOfDeath : currentYear) -
      curPerson.yearOfBirth;
    return prevPersonAge > curPersonAge ? prevPerson : curPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
