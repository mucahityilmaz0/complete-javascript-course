'use strict';
/* 
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ESS
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 234222345567,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 234222345567) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing..
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('🤚');
};

document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);
*/
