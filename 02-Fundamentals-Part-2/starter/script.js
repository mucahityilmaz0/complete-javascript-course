'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.');

//const interface = 'Audio';
const private = 556;


function logger() {
    console.log('My name is Mücahit');
}

// calling , running , invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//console.log(fruitProcessor(2, 4));

const num = Number('23');

// Function Declaration
function calcAge1(birthYear) {
    // const age = 2023 - birthYear;
    // return age;
    return 2023 - birthYear;
}

console.log(calcAge1(1996));

// Function Expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

console.log(calcAge2(1996));


//Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
console.log(calcAge3(1996));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'mucahit'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const retirement = 65 - calcAge(birthYear);

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1996, 'mucahit'));
console.log(yearsUntilRetirement(1950, 'ahmet'));


const friend1 = 'Michael';
const friend2 = ' Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);
//friends = ['bob', 'bobo', 'alice'];

const firstName = 'Mucahit';
const mucahit = [firstName, 'Yılmaz', 2023 - 1996, 'student', friends];
console.log(mucahit);
console.log(mucahit.length);

//Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const years = [1996, 1967, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//remove elements
friends.pop(); // last one
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('you have a friend called Steven');
}


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Scmedtmann',
    age: 2023 - 1996,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven']
};


const jonas = {
    firstName: 'Jonas',
    lastName: 'Scmedtmann',
    age: 2023 - 1996,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last'+ nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firtName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firtName, lastName, age, job, and friends');
}

jonas.location = ' Portugal';
jonas['twitter'] = '@asdsd';
console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


const mucahit = {
    firstName: 'Mucahit',
    lastName: 'Yılmaz',
    birthYear: 1996,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    }
};

console.log(mucahit.calcAge());
console.log(mucahit['calcAge'](1996));
console.log(mucahit.calcAge(mucahit.birthYear));


// Challenge
// " Mucahit is a 46-year old student, and he has a driver's license"

console.log(`${mucahit.firstName} is a ${mucahit.calcAge()}-year old ${mucahit.job}, and he has ${mucahit.hasDriverLicense === true ? `a ` : `no`}driver's license`);


for (let i = 1; i <= 10; i++) {
    console.log('Lifting weights repetition ' + i);
}



const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    //reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    //Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

//continue and break
console.log('--- Jonas array ---')
console.log(jonasArray);

console.log('--- Only Strings ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- Break with number ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log('-----------starting exercise ' + exercise);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ` + rep);
    }
}

*/

