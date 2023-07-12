/* Write your code below. Good luck! 🙂 */

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const scoreDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const scoreKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}