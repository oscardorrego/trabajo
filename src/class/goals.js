const location = require("./where");
class Goal {
   /**
     * @param {Array|Integer} local  => Introduces an array or an integer representing local goals.
     * @param {Array|Integer} away   => Introduces an array or an integer representing away goals.
     */
    constructor(local, away){
        this.local = new location.Location('goal', 'local', local);
        this.away = new location.Location('goal', 'away', away);
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
    get toStringLocalAverage() {
        return `${this.getLocal.getAveragePositive},${Math.abs(this.getLocal.getAverageNegative)}`;
    }
    get toStringAwayAverage() {
        return `${this.getAway.getAveragePositive},${Math.abs(this.getAway.getAverageNegative)}`;
    }
    get toStringLocalTotal() {
        return `${this.getLocal.getSumPositive},${Math.abs(this.getLocal.getSumNegative)}`;
    }
    get toStringAwayTotal() {
        return `${this.getAway.getSumPositive},${Math.abs(this.getAway.getSumNegative)}`;
    }
}
module.exports.Goal = Goal;
