const location = require("./where");

class MatchResult {
    /**
     * 
     * @param {Array|Integer} local Introduces an array or an integer representing local matched.
     * @param {Array|Integer} away  Introduces an array or an integer representing away matched.
     */
    constructor(local, away){
        this.local = new location.Location('match', 'local', local);
        this.away = new location.Location('match', 'away', away);
    }
    addValue(type, result) {
        if(type == 'local') this.local.addvalue(result);
        else if(type == 'away') this.away.addvalue(result);
        else return false;
        return true;
    }
    getResults(type) {
        return type == 'local' ?
                this.local.getResult : type == 'away' ?
                    this.away.getResult : false;
    }
    get getLocal() {
        return this.local;
    }
    get getAway() {
        return this.away;
    }
    get toStringLocal() {
        return `${this.getLocal.getWon},${this.getLocal.getLost},${this.getLocal.getTied}`;
    }
    get toStringLocal() {
        return `${this.getAway.getWon},${this.getAway.getLost},${this.getAway.getTied}`;
    }
    get toStringLocalStreak() {
        return `${this.getLocal.getWinningStreak},${this.getLocal.getTiedWinningStreak}`;
    }
    get toStringAwayStreak() {
        return `${this.getAway.getWinningStreak},${this.getAway.getTiedWinningStreak}`;
    }
}

//export default Matches;
module.exports.MatchResult = MatchResult;