const goal = require("../../src/class/goals");

describe("See how away goal works with arrays", () => {
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new goal.Goal([1, -1, 2, 0], [2, 1]).getAway.allSum).toEqual({ positive: 0, negative: 0 });
    });
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new goal.Goal([2, 1], [1, -1, -2, 0]).getLocal.allSum).toEqual({ positive: 0, negative: 0 });
    }); 
    it("The creation of the object should return { positive: 3, negative: -1 }", () => {
        expect(new goal.Goal([2, -1], [1, -1, 2, 0]).getAway.allSum).toEqual({ positive: 3, negative: -1 });
    }); 
});

describe("See how local goal works with arrays", () => {
    it("The creation of the object should return { positive: 3, negative: -1 }", () => {
        expect(new goal.Goal([1, -1, 2, 0], [2, 1]).getLocal.allSum).toEqual({ positive: 3, negative: -1 });
    });
    it("The creation of the object should return { positive: 0, negative: 0 }", () => {
        expect(new goal.Goal([2, 1], [1, -1, -2, 0]).getLocal.allSum).toEqual({ positive: 0, negative: 0 });
    }); 
    it("The creation of the object should return { positive: 2, negative: -1 }", () => {
        expect(new goal.Goal([2, -1], [1, -1, 2, 0]).getLocal.allSum).toEqual({ positive: 2, negative: -1 });
    }); 
});