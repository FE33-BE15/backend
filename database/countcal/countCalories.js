function countingCalories(user) {
  const { gender, weight, height, age } = user;
  let calori;

  // kilogram -> pound
  const weightInPound = weight * 2.20462;

  // sentimeter -> inci
  const heightInInch = height * 0.393701;

  if (gender === "Laki-laki") {
    calori = 66.5 + 13.75 * weightInPound + 5.003 * heightInInch - 6.75 * age;
  } else {
    calori = 65.51 + 9.563 * weightInPound + 1.85 * heightInInch - 4.676 * age;
  }

  return calori;
}

module.exports = {
  countingCalories,
};
