const { Location } = require("./where");

class MatchResult {
    /**
     * 
     * @param {Array|Integer} local Introduces an array or an integer representing local matched.
     * @param {Array|Integer} away  Introduces an array or an integer representing away matched.
     */
    constructor(local, away){
        this.local = new Location('match', 'local', local);
        this.away = new Location('match', 'away', away);
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
}

//export default Matches;
module.exports.MatchResult = MatchResult;