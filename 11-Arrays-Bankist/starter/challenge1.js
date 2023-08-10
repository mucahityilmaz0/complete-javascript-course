'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const onlyDogsJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  const allDogs = onlyDogsJulia.concat(...dogsKate);
  // console.log(dogsJulia);
  // console.log(onlyDogsJulia);
  // console.log(allDogs);

  allDogs.forEach(function (year, num) {
    if (year >= 3) {
      console.log(
        `Dog number ${num + 1} is an adult, and is ${year} years old`
      );
    } else {
      console.log(`Dog number ${num + 1} is still a puppy`);
    }
  });
}

checkDogs(dogsJulia, dogsKate);
console.log('---------TEST DATA 2--------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
