'use strict';

const dogsAges = [5, 2, 4, 1, 15, 8, 3];
const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(ages) {
  const humanAge = [];
  for (const i of ages) {
    if (i <= 2) {
      humanAge.push(2 * i);
    } else {
      humanAge.push(16 + i * 4);
    }
  }
  const adultHumanAge = [];
  for (const i of humanAge) {
    if (i >= 18) {
      adultHumanAge.push(i);
    }
  }
  const average =
    adultHumanAge.reduce(function (acc, i) {
      return acc + i;
    }, 0) / adultHumanAge.length;
  console.log(adultHumanAge);
  return average;
}

console.log(calcAverageHumanAge(dogsAges));
console.log(calcAverageHumanAge(dogsAges2));
