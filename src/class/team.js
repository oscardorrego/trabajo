const matchResult = require("./matchResult");
const goal = require("./goals");

//import { ResultMatch } from "./Matches";

class Team {
    constructor(name, div, match, goal) {
        this.name = name;
        this.div = div;
        this.match = match == null ? new matchResult.MatchResult(2, 2) : match;
        this.goal = goal == null ? new goal.Goal(1, 1) : goal;
    }
    set name(name) {
        this.mame = name;
    }
    set div(div) {
        this.div = div;
    }
    set match(match) {
        this.match = match;
    }
    set goal(goal) {
        this.goal = goal;
    }
    get name() {
        return this.name;
    }
    get div() {
        return this.div;
    }
    get match() {
        return this.match;
    }
    get goal() {
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