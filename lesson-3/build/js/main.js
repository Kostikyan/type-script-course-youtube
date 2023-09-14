"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Start', 'Les Paul', 5010];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'a';
stringArr.push('hey');
guitars[0] = 1923;
guitars.unshift(`Jim`);
let test = []; // any data type
let bands = []; // strings
bands.push('Van Halen');
test.push('Van Halen');
test.push(['Van Halen', 'a', 1]);
test.push(true);
test.push(23);
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
// myTuple = mixed; problem
// mixed = myTuple; np
// Object
let myObj;
myObj = []; // to array
console.log(typeof myObj); // object
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Vahe',
    active: false,
    albums: [1992, 1950, 'O203']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
};
const greatGuitarist = (guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}!`;
};
console.log(greatGuitarist(jp));
let jp_2 = {
    active: true,
    albums: ['I', 'II', 'IV']
};
const greatGuitarist_2 = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'hello!';
};
console.log(greatGuitarist_2(jp_2));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 12] = "U";
    Grade[Grade["D"] = 13] = "D";
    Grade[Grade["C"] = 14] = "C";
    Grade[Grade["B"] = 15] = "B";
    Grade[Grade["A"] = 16] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
