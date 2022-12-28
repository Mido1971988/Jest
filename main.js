// ----------------------------First Test-------------------

// function sayHello() {
//     return `Hello Jest`;
// }

// module.exports = sayHello;

// ----------------------------Global Method 1-------------------
// const theSum = (num1, num2, num3) => {
//     return (num1 || 0) + (num2 || null) + (num3 || null);
// };
// const theSum = (num1 = null , num2 = null , num3 = null ) => {
//     return num1 + num2 + num3;
// };

// module.exports = theSum;

// ----------------------------Global Method 2-------------------
// const theSum = (...numbers) => numbers.reduce((pv, cv) => pv + cv, 0);

// module.exports = theSum;

// --------------------Describe Advanced-------------------

// function filterName(name) {
//     if (name === undefined) {
//         name = "Unknown";
//     }
//     if (name.startsWith(" ") || name.endsWith(" ")) {
//         name = name.trim();
//     }
//     if (name.length > 10) {
//         name = name.substring(0, 10);
//     }
//     if (name.startsWith("_")) {
//         name = name.substring(1);
//     }
//     return name;
// }

// module.exports = filterName;

// --------------------
// lesson 8 only comments 
// --------------------Only and Skip-------------------
// const theSum = (...numbers) => numbers.reduce((pv, cv) => pv + cv, 0);

// module.exports = theSum;

// --------------------Jest Matcher 1 and 2-------------------
// const myData = [5, 2, 3, 4, 5, 5];

// module.exports = myData;

// --------------------Code Coverage-------------------
/*
    filterName Function
    [1] If No Name Is Given It Will Show "Unknown"
    [2] If Name Starts Or Ends With Space It Will Be Trimmed
    [3] If Name Length > 10 It Will Show Only First 10 Characters
    [4] If Name Starts With Underscore It Will Not Show The Underscore
*/

// function filterName(name) {
//     if (name === undefined) {
//         name = "Unknown";
//     }
//     if (name.startsWith(" ") || name.endsWith(" ")) {
//         name = name.trim();
//     }
//     if (name.length > 10) {
//         name = name.substring(0, 10);
//     }
//     if (name.startsWith("_")) {
//         name = name.substring(1);
//     }
//     if (name === "Hell") {
//         throw Error("This Name Is Not Allowed");
//     }
//     return name;
// }

// module.exports = filterName;

// --------------------Mock Function-------------------
// function sayHello(name) {
//     return `Hello ${name}`;
// }

// module.exports = sayHello;

