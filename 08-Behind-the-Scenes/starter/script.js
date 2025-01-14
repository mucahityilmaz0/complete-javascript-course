'use strict';
/*
function calcAge(birtYear) {
  const age = 2023 - birtYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birtYear}`;
    console.log(output);

    if (birtYear >= 1981 && birtYear <= 1996) {
      var milenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `oh, and you're a milenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(milenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Mucahit';
calcAge(1996);
//console.log(age);
//printAge();

// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Mücahit';
let job = 'student';
const year = 1996;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
console.log(addArr);
//console.log(addArr(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};

var addArr = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All product deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);

const calcAge = function (birtYear) {
  console.log(2023 - birtYear);
  console.log(this);
};
calcAge(1996);

const calcAgeArrow = birtYear => {
  console.log(2023 - birtYear);
  console.log(this);
};
calcAgeArrow(1996);

const mucahit = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
mucahit.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = mucahit.calcAge;
matilda.calcAge();

const f = mucahit.calcAge;
//f();
console.log(f);

var firstName = 'Matilda';

const mucahit = {
  firstName: 'mucahit',
  year: 1996,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);
    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  // greet: function () {
  //   console.log(this);        //correct version
  //   console.log(`hey ${this.firstName}`);
  // },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
mucahit.greet();
mucahit.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Mucahit',
  age: 27,
};
const friend = me;
friend.age = 28;
console.log('Friend:', friend);
console.log('Me:', me);

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
//marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
