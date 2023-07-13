'use strict';

//Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.


const calcAverage = (first, second, third) => (first + second + third) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins > scoreKoalas && scoreDolphins >= scoreKoalas * 2) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= scoreDolphins * 2) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);