const { Location } = require("./where");
class Goal {
   /**
     * @param {Array|Integer} local  => Introduces an array or an integer representing local goals.
     * @param {Array|Integer} away   => Introduces an array or an integer representing away goals.
     */
    constructor(local, away){
        this.local = new Location('goal', 'local', local);
        this.away = new Location('goal', 'away', away);
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

module.exports.Goal = Goal;
