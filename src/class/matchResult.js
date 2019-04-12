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
    //No index
    get toStringLocal() {
        return `${this.getLocal.getWon},${this.getLocal.getTied},${this.getLocal.getLost}`;
    }
    get toStringAway() {
        return `${this.getAway.getWon},${this.getAway.getTied},${this.getAway.getLost}`;
    }
    get toStringLocalStreak() {
        return `${this.getLocal.getWinningStreak},${this.getLocal.getTiedWinningStreak}`;
    }
    get toStringAwayStreak() {
        return `${this.getAway.getWinningStreak},${this.getAway.getTiedWinningStreak}`;
    }
    //Index
    toStringLocalIndex(from = 0, to = -1) {
        return `${this.getLocal.getWonIndex(from, to)},${this.getLocal.getTiedIndex(from, to)},${this.getLocal.getLostIndex(from, to)}`;
    }
    toStringAwayIndex(from = 0, to = -1) {
        return `${this.getAway.getWonIndex(from, to)},${this.getAway.getTiedIndex(from, to)},${this.getAway.getLostIndex(from, to)}`;
    }
    toStringLocalStreakIndex(from = 0, to = -1) {
        return `${this.getLocal.getWinningStreakIndex(from, to)},${this.getLocal.getTiedWinningStreakIndex(from, to)}`;
    }
    toStringAwayStreakIndex(from = 0, to = -1) {
        return `${this.getAway.getWinningStreakIndex(from, to)},${this.getAway.getTiedWinningStreakIndex(from, to)}`;
    }
}

//export default Matches;
module.exports.MatchResult = MatchResult;