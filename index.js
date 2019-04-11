
//import { src } from "./src/class/Matches";
const where = require("./src/class/Matches");
const goal = require("./src/class/goals");

match = new where.MatchResult([1, 0, -1], [1, 0, -1]);
goals = new goal.Goal([2, 10, 7], [1, 3, 10]);

console.log(match.addValue('local', 1));
console.log(match.getLocal.getWon);
console.log(match.getResults('local'));

console.log(goals.addValue('local', [1, -1]));
console.log(goals.addValue('local', [0, 0]));
console.log(goals.addValue('away', [1, -1]));
console.log(goals.addValue('away', [0, 0]));

console.log(goals.getResults('local'));
console.log(goals.getResults('away'));

console.log(goals.getLocal.getSumPositive);
console.log(goals.getLocal.getSumNegative);
console.log(goals.getLocal.allSum);

console.log(goals.getAway.getSumPositive);
console.log(goals.getAway.getSumNegative);
console.log(goals.getAway.allSum);
