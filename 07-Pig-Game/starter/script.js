'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); //faster than query
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');
