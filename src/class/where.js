const myMath = require("../rubbish/mathOverride");
class Location {
    /**
     * @param {String} type          => Type refers to if it is a match or a goal
     * @param {String} where         => local|away representando donde juega un equipo (local visitante)
     * @param {Array|Integer} result => se le puede pasar un array de resultados (sabiendo que admite un límite de 10, en caso de más solamente coge los 10 últimos) o un resultado solamente.
     */
    constructor(type, where, result) {
        this.type = ['match', 'goal'].includes(type) ? type : 'match';
        this.where = ['local', 'away'].includes(where) ? where : 'local';
        this.result = Location.areResultsRight(this.type, result); //Default undefined
    }
    get getwhere() {
        return this.where;
    }
    get getResult() {
        return this.result;
    }
    //Matches Start:
    get getWon() {
        return this.type == 'match' && this.result !== undefined ? this.result.filter((el) =>  el == 1).length : null;
    }
    get getLost() {
        return this.type == 'match' && this.result !== undefined ? this.result.filter((el) =>  el == -1).length : null;
    }
    get getTied() {
        return this.type == 'match' && this.result !== undefined ? this.result.filter((el) =>  el == 0).length : null;
    }
    get getAllSorted() {
        return this.type == 'match' && this.result !== undefined ? {
            "won": this.result.filter((el) =>  el == 1).length,
            "lost": this.result.filter((el) =>  el == -1).length,
            "tied": this.result.filter((el) =>  el == 0).length
        } : null;
    }
    get getWinningStreak() {
        return this.type == 'match' && this.result !== undefined ? this.result.slice(Math.max(this.lastIndexOf(0), this.lastIndexOf(-1)) > -1 ? Math.max(this.lastIndexOf(0), this.lastIndexOf(-1)) : 0, this.length).reduce((ac, cv) => ac + cv, 0) : null;
    }
    get getTiedWinningStreak() {
        return this.type == 'match' && this.result !== undefined ? this.result.slice(this.lastIndexOf(-1) > -1 ? this.lastIndexOf(-1) : 0, this.length).reduce((ac, cv) => ac + cv, 0) : null;
    }
    //Goals start: 
    get getSumPositive() {
        return this.type == 'goal' && this.result !== undefined ? this.result.reduce((ac, cv) => ac + (cv >= 0 ? cv : 0), 0)  : null;
    }
    get getSumNegative() {
        return this.type == 'goal' && this.result !== undefined ? this.result.reduce((ac, cv) => ac + (cv <= 0 ? cv : 0), 0)  : null;
    }
    get allSum() {
        return  this.type == 'goal' && this.result !== undefined ? {
            "positive": this.result.reduce((ac, cv) => ac + (cv >= 0 ? cv : 0), 0),
            "negative": this.result.reduce((ac, cv) => ac + (cv <= 0 ? cv : 0), 0)
        } : null;
    }
    get getAveragePositive() {
        return  this.type == 'goal' && this.result !== undefined ? myMath.averagePositiveOnlyEven(this.result) : null
    }
    get getAverageNegative() {
        return  this.type == 'goal' && this.result !== undefined ? myMath.averageNegativeOnlyOdd(this.result) : null
    }
    get allAverage() {
        return  this.type == 'goal' && this.result !== undefined ? {
            "positive": myMath.averagePositiveOnlyEven(this.result),
            "negative": myMath.averageNegativeOnlyOdd(this.result)
        } : null;
    }
    //General methods
    addvalue(final) {
        this.result = this.result != undefined ? this.result.concat(Location.areResultsRight(this.type, final)) : Location.areResultsRight(this.type, final);
        if (this.type == "match" && this.result !== undefined && this.result.length == 10) {
            this.result.shift();
        } else if(this.type == "goal" && this.result !== undefined && this.result.length == 20) {
            this.result.shift();
            this.result.shift();
        }
    }
    static areRightFormatGoals(final) {
        return final.length >= 2
            && final.length % 2 == 0
            && final.filter((el, index) => { return index % 2 == 0 && el >= 0 }).length > 0
            && final.filter((el, index) => { return index % 2 != 0 && el <= 0 }).length > 0
            && final.filter((el, index) => { return index % 2 == 0 && el >= 0 }).length == final.filter((el, index) => { return index % 2 != 0 && el <= 0 }).length;
    }
    //Comprueba que todos los datos son correctos
    static areResultsRight(type, result) {
        let regex = this.type == "match" ? new RegExp("^\-?[0-1]$") : new RegExp("^\-?[0-9]{1,2}$");
        if (type == "match") {
            return  Array.isArray(result) ?
                        Array.from(result.every((any) => {
                            return regex.test(any);
                        }) ? result.length <= 10 ? 
                                result : 
                                result.slice(result.length - 10, result.length)
                            : new Array(0))
                        : [-1, 0, 1].includes(result) ?
                            [result]
                                : new Array(0); // +1, 0, -1
        } else if(type == "goal") {
            return  Array.isArray(result) ?
                        Array.from(result.every((any) => {
                            return regex.test(any);
                        }) && Location.areRightFormatGoals(result) ?
                            result : new Array(0))
                    : new Array(0);
        }
    }
}
module.exports.Location = Location;
