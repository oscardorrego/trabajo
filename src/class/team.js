const matchResult = require("./matchResult");
const goaal = require("./goals");

//import { ResultMatch } from "./Matches";

class Team {
    constructor(name, div, match, goal) {
        this.name = name;
        this.div = div;
        this.match = match == null ? new matchResult.MatchResult(2, 2) : match;
        this.goal = goal == null ? new goaal.Goal(1, 1) : goal;
    }
    get getname() {
        return this.name;
    }
    get getdiv() {
        return this.div;
    }
    get getmatch() {
        return this.match;
    }
    get getgoal() {
        return this.goal;
    }
    setPropertiesLocal(matchResult, goals) {
        this.match.getLocal.addvalue(matchResult);
        this.goal.getLocal.addvalue(goals);
    }
    setPropertiesAway(matchResult, goals) {
        this.match.getAway.addvalue(matchResult);
        this.goal.getAway.addvalue(goals);
    }
}

module.exports.Team = Team;