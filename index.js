
//import { src } from "./src/class/Matches";
const where = require("./src/class/Matches");
const goal = require("./src/class/goals");
const math = require("./src/class/mathOverride");

match = new where.MatchResult([1, 0, -1], 1);

console.log(math.averagePositive([1, 2, 3, 4]));