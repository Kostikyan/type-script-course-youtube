"use strict";
// Type Aliases
// Literal Types
let myName;
myName = 'Dave';
// myName = 'John'; // exception
let username;
username = 'Amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('hello!');
logMessage('hello!');
logMessage(add(2, 3));
logMessage('hello!');
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c != "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 4));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
