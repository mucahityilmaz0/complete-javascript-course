'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1..
for (const [goalNum, scorer] of game.scored.entries())
  console.log(`Goal ${goalNum}: ${scorer}`);
//2..
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
console.log(average / odds.length);
//3..
const [team1Score, , team2Score] = Object.values(game.score);
console.log(team1Score, team2Score);
if (team1Score > team2Score) {
  console.log(`Odd of victory ${game.team1}: ${odds[0]}`);
} else if (team1Score < team2Score) {
  console.log(`Odd of victory ${game.team2}: ${odds[2]}`);
} else {
  console.log(`Odd of draw: ${odds[1]}`);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
