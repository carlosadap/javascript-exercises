let findTheOldest = function(array) {
  const oldestPerson = array.reduce((firstPerson, currentPerson) => {
    return older(firstPerson, currentPerson);
  })

  return oldestPerson
}

function older(person1, person2) {
  if (currentAge(person1) > currentAge(person2)) {
    return person1;
  } else {
    return person2;
  }
}

function currentAge(person) {
  const currentDate = new Date();
  const cYear = currentDate.getFullYear();
  let agePerson;
  if ("yearOfDeath" in person) {
    agePerson = person.yearOfDeath - person.yearOfBirth;
  } else {
    agePerson = cYear - person.yearOfBirth;
  }
  return agePerson
}

module.exports = findTheOldest
