// const say = require("../main");

// test("Say Jest Message", () => {
//     expect(say()).toBe("Hello Jest");
// });



// ----------------------------

// const theSum = require("../main");

/*
test(name, fn, timeout)
it(name, fn, timeout) => it is alias of test
*/

// test("Return 0 If No Number", () => {
//     expect(theSum()).toBe(0);
// });

// test("Return The Number", () => {
//     expect(theSum(10)).toBe(10);
// });

// test("Return The Number 1 + Number 2", () => {
//     expect(theSum(15, 25)).toBe(40);
// });

// test("Return The Number 1 + Number 2 + Number 3", () => {
//     expect(theSum(10, 20, 30)).toBe(60);
// }); 

// ----------------------------
// const theSum = require("../main");

/*
    test(name, fn, timeout)
    it(name, fn, timeout)
*/

// test("Return 0 If No Number", () => {
//     expect(theSum()).toBe(0);
// });

// test("Return The Number", () => {
//     expect(theSum(10)).toBe(10);
// });

// test("Return The Number 1 + Number 2", () => {
//     expect(theSum(15, 25)).toBe(40);
// });

// test("Return The Number 1 + Number 2 + Number 3", () => {
//     expect(theSum(10, 20, 30)).toBe(60);
// });

// test("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
//     expect(theSum(10, 20, 30, 10)).toBe(70);
// });

// test("Return The Sum Result Of All Numbers", () => {
//   expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
// });

// console.log([].reduce((a, b) => a + b, 0));

// --------------------

const theFilter = require("../main");

describe("Validate The Input Field", () => {
    test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe("Unknown");
    });
    test("Check For Spaces (Start + End)", () => {
        expect(theFilter(" Osama ")).toBe("Osama");
    });
    test("Check If Name Length > 10 Characters", () => {
        expect(theFilter("Osama_Mohamed_Elsayed")).toBe("Osama_Moha");
    });
    test("Check If Name Not Starts With Underscore", () => {
        expect(theFilter("_Osama")).toBe("Osama");
    });
});