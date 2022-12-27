// ----------------------------First Test-------------------

// const say = require("../main");

// test("Say Jest Message", () => {
//     expect(say()).toBe("Hello Jest");
// });



// ----------------------------Global Method-------------------

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

// ----------------------------Global Method 2-------------------
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

// --------------------Describe Advanced-------------------

// const theFilter = require("../main");

// describe("Validate The Input Field", () => {
//     test("Check If Name Is Empty", () => {
//     expect(theFilter()).toBe("Unknown");
//     });
//     test("Check For Spaces (Start + End)", () => {
//         expect(theFilter(" Osama ")).toBe("Osama");
//     });
//     test("Check If Name Length > 10 Characters", () => {
//         expect(theFilter("Osama_Mohamed_Elsayed")).toBe("Osama_Moha");
//     });
//     test("Check If Name Not Starts With Underscore", () => {
//         expect(theFilter("_Osama")).toBe("Osama");
//     });
// });

// --------------------Simple Comment-------------------
// lesson 8 only comments

// --------------------Only and Skip-------------------
// const theSum = require("../main");

// describe("Check The Numbers Sum Total", () => {
//     describe.skip("If No Numbers Or Only One Number", () => {
//         test.skip("Return 0 If No Number", () => {
//             expect(theSum()).toBe(0);
//         });

//         test("Return The Number", () => {
//             expect(theSum(10)).toBe(10);
//         });
//     });

//     describe.only("If More Than One Number", () => {
//         test.only("Return The Number 1 + Number 2", () => {
//             expect(theSum(15, 25)).toBe(40);
//         });

//         test.only("Return The Number 1 + Number 2 + Number 3", () => {
//             expect(theSum(10, 20, 30)).toBe(60);
//         });

//         test("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
//             expect(theSum(10, 20, 30, 10)).toBe(70);
//         });

//         test("Return The Sum Result Of All Numbers", () => {
//             expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
//         });
//     });
// });

// --------------------beforeAll , afterAll , beforeEach-------------------
/*
    beforeAll(fn, timeout)
    beforeEach(fn, timeout)
*/

// beforeAll(() => {
//     // Connect To Database
//     // Empty Testing Table
//     // Add Dummy Data For Testing
//     // Prepare Everything Before Testing
// });

// afterAll(() => {
//     // Clean Database
//     // Clean Cache
// });
// --------------------Jest Matcher-------------------

// const allData = require("../main");

// test("Check If Array Contains 6 Elements 1st Method", () => {
//     expect(allData.length).toBe(6);
// });

// test("Check If Array Contains 6 Elements 2nd Method", () => {
//     expect(allData).toHaveLength(6);
// });

// test("Check If Array Contains Number 3", () => {
//     expect(allData).toContain(3);
// });

// test("Check If Array Not Contains Number 6", () => {
//     expect(allData).not.toContain(6);
// });

// test("Check If Array Not Contains Number Zero", () => {
//     for (let i = 0; i < allData.length; i++) {
//         expect(allData[i]).not.toBe(0);
//     }
// });

// --------------------Jest Matcher 2-------------------
// const allData = require("../main");


// test("Check If Array Contains Only Numbers 1st Method", () => {
//     for (let i = 0; i < allData.length; i++) {
//         expect(isNaN(allData[i])).toBe(false);
//     }
// });

// test("Check If Array Contains Only Numbers 2nd Method", () => {
//     for (let i = 0; i < allData.length; i++) {
//         expect(isNaN(allData[i])).toBeFalsy();
//     }
// });

// test("Check If Array Contains Only Numbers 3rd Method", () => {
//     for (let i = 0; i < allData.length; i++) {
//         expect(isNaN(allData[i])).not.toBeTruthy();
//     }
// });

// test("Check If Array First Element Is Larger Than 1", () => {
//     expect(allData[0]).toBeGreaterThanOrEqual(1);
// });

// test("Check If Array First Element Is Less Than 5", () => {
//     expect(allData[0]).toBeLessThanOrEqual(5);
// });

// --------------------Jest Matcher 3-------------------

// const allData = require("../main");

// test("Check For Undefined", () => {
//     let a;
//     expect(a).toBeUndefined();
// });

// test("Check For Substring Inside String By RegExp", () => {
//     let myString = "I Love Elzero Web School";
//     expect(myString).toMatch(/Elzero/);
// });

// test("Check For Property Age", () => {
//     let myObject = {
//         name: "Osama",
//         age: 37,
//     };
//     expect(myObject).toHaveProperty("age");
// });

// test("Check For Property Age Value Is 37", () => {
//     let myObject = {
//         name: "Osama",
//         age: 38,
//     };
//     expect(myObject).toHaveProperty("age", 38);
// });


// --------------------Create your own Matchers-------------------
// expect.extend({
//     toBeLargerThan(received, target) {
//         const pass = received > target;
//         if (pass) {
//             return {
//             message: () => `Expected ${received} To Be Larger Than ${target}`,
//             pass: true,
//             };
//         } else {
//             return {
//             message: () =>
//                 `Error: Expected ${received} To Be Larger Than ${target}`,
//             pass: false,
//             };
//         }
//     },
// });

// test("Check If Number Is Larger Than Other Number", () => {
//     expect(10).toBeLargerThan(9);
// });

// --------------------Create your own Matchers 2-------------------
expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if (pass) {
            return {
            message: () => `Expected ${received} To Be Between ${start} And ${end}`,
            pass: true,
            };
        } else {
            return {
            message: () => `Expected ${received} To Be Between ${start} And ${end}`,
            pass: false,
            };
        }
    },
});

test("Check If Year Is Between Years Range", () => {
    expect(1982).toBeBetween(1900, 2020);
});

