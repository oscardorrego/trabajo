
class myMath {
    static average(values) {
        return Array.isArray(values) ? values.reduce((ac, cv) => ac + cv, 0) / values.length : null;
    }
    static averagePositive (values) {
        return Array.isArray(values) ? values.reduce((ac, cv) => ac + (cv >= 0 ? cv : 0), 0) / values.filter((el, _index) => { return el >= 0 }).length : null;
    }
    static averageNegative (values) {
        return Array.isArray(values) ? values.reduce((ac, cv) => ac + (cv <= 0 ? cv : 0), 0) / values.filter((el, _index) => { return el <= 0 }).length : null;
    }
    static averagePositiveOnlyEven (values) {
        return Array.isArray(values) ? values.reduce((ac, cv) => ac + (cv >= 0 ? cv : 0), 0) / values.filter((el, index) => { return index % 2 == 0 && el >= 0 }).length : null;
    }
    static averageNegativeOnlyOdd (values) {
        return Array.isArray(values) ? values.reduce((ac, cv) => ac + (cv <= 0 ? cv : 0), 0) / values.filter((el, index) => { return index % 2 != 0 && el <= 0 }).length : null;
    }
    static whoIsBigger(first, second) {
        return first > second ? 1 : first < second ? -1 : 0;
    }
}

module.exports.myMath = myMath;