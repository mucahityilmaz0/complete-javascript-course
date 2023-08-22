'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1

dogs.forEach(function (dog) {
  return (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
}),
  console.log(dogs);

//2

const sarahsDog = dogs.find(function (dog) {
  return dog.owners.includes('Sarah');
});
console.log(sarahsDog);
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'
  } `
);

//3
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.filter(function (dog) {
  if (dog.curFood > dog.recFood) {
    ownersEatTooMuch.push(dog.owners);
  } else {
    ownersEatTooLittle.push(dog.owners);
  }
});
console.log(ownersEatTooMuch.flat(), ownersEatTooLittle.flat());

//4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//7
console.log(dogs.filter(checkEatingOkay));

//8

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(dogsSorted);
