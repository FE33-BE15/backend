function countingCalories(user) {
  const { gender, weight, height, age } = user;
  let calori;

  if (gender === "Laki-laki") {
    calori = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  } else {
    calori = 65.51 + 9.563 * weight + 1.85 * height - 4.676 * age;
  }

  return calori;
}

module.exports = {
  countingCalories,
};
