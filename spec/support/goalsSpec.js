import { Goal } from "../../src/class/goals";
import { averagePositiveOnlyEven, averageNegativeOnlyOdd } from "../../src/rubbish/mathOverride";

//General test away constructor
describe("See how away goal works with arrays", () => {
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new Goal([1, -1, 2, 0], [2, 1]).getAway.allSum).toEqual({ positive: 0, negative: 0 });
    });
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new Goal([2, 1], [1, -1, -2, 0]).getLocal.allSum).toEqual({ positive: 0, negative: 0 });
    }); 
    it("The creation of the object should return { positive: 3, negative: -1 }", () => {
        expect(new Goal([2, -1], [1, -1, 2, 0]).getAway.allSum).toEqual({ positive: 3, negative: -1 });
    }); 
});

//General test local constructor
describe("See how local goal works with arrays", () => {
    it("The creation of the object should return { positive: 3, negative: -1 }", () => {
        expect(new Goal([1, -1, 2, 0], [2, 1]).getLocal.allSum).toEqual({ positive: 3, negative: -1 });
    });
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new Goal([2, 1], [1, -1, -2, 0]).getLocal.allSum).toEqual({ positive: 0, negative: 0 });
    }); 
    it("The creation of the object should return { positive: 2, negative: -1 }", () => {
        expect(new Goal([2, -1], [1, -1, 2, 0]).getLocal.allSum).toEqual({ positive: 2, negative: -1 });
    }); 
});

//General test local average goals
describe("See how local average goal works with arrays", () => {
    it("The creation of the object should return a number of all positive numbers", () => {
        expect(new Goal([1, -1, 2, 0], [2, 1]).getLocal.getAveragePositive).toBe(averagePositiveOnlyEven([1, -1, 2, 0]));
    });
    it("The creation of the object should return a number of all negative numbers", () => {
        expect(new Goal([2, -1, 0, 0, 1, -1], [1, -1, -2, 0]).getLocal.getAverageNegative).toBe(averageNegativeOnlyOdd([2, -1, 0, 0, 1, -1]));
    }); 
    it("The creation of the object should return a JSON of all negative and positive numbers", () => {
        expect(new Goal([2, -1, 0, 0, 1, -1], [1, -1, 2, 0]).getLocal.allAverage).toEqual({ positive: averagePositiveOnlyEven([2, -1, 0, 0, 1, -1]), negative: averageNegativeOnlyOdd([2, -1, 0, 0, 1, -1]) });
    }); 
});

//General test away average goals 
describe("See how away average goal works with arrays", () => {
    it("The creation of the object should return a number of all positive numbers", () => {
        expect(new Goal([2, 1], [1, -1, 2, 0, 3, -3]).getAway.getAveragePositive).toEqual(averagePositiveOnlyEven([1, -1, 2, 0, 3, -3]));
    });
    it("The creation of the object should return a number of all negative numbers", () => {
        expect(new Goal([2, 1], [1, -1, 2, 0, 3, -3]).getAway.getAverageNegative).toBe(averageNegativeOnlyOdd([1, -1, 2, 0, 3, -3]));
    }); 
    it("The creation of the object should return a JSON of all negative and positive numbers", () => {
        expect(new Goal([2, -1, 0, 0, 1, -1], [1, -1, 2, 0]).getAway.allAverage).toEqual({ positive: averagePositiveOnlyEven([1, -1, 2, 0]), negative: averageNegativeOnlyOdd([1, -1, 2, 0]) });
    }); 
});