/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firsName = "Matilda";

console.log(firsName);
console.log(firsName);
console.log(firsName);

let jonas_matilda = "JM";
let $function = "jonas";

//Variable name conventions
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1996;
//birthYear = 1995;
//const job;

var job = "programmer";
job = "teacher";

lastName = "Yılmaz";
console.log(lastName);

// Math operators
const now = 2023;
let ageJonas = now - 1996;
let ageSarah = now - 2000;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3= 2 * 2 * 2

const firsName = "Mücahit";
const lastName = "Yılmaz";
console.log(firsName + " " + lastName);

// Assigment operators
let x = 10 + 5; //15
x += 10; //x = x + 10
x++;
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=

const now = 2023;
let ageJonas = now - 1996;
let ageSarah = now - 2000;
console.log(now - 1996 > now - 2000);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Mucahit";
const job = "student";
const birthYear = 1996;
const year = 2023;

const mucahit = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(mucahit);

const mucahitNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(mucahitNew);

console.log(`regular`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);


const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log("sarah can start driving license🚗 ");
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years 😊`);
}

const birthYear = 1996;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(Boolean(0));

//type coercion
console.log('I am ' + 27 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


const age = '18';
if (age === 18) console.log('you just became an adult (strict)');

if (age == 18) console.log('you just became an adult (loose)');

const favourite = Number(prompt("what's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 27) {
    console.log('cool! 27 is an amazing');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('number is not 27 or 7 or 9');
}

if (favourite !== 27) console.log('Why not 27?');


const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('sarah is able to drive!');
// } else {
//     console.log('someone else should drive..');
// }

const isTired = true;

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive!');
} else {
    console.log('someone else should drive..');
}



// Bonus1

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy.')
}
*/