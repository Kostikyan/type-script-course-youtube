// Type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[]

interface Guitarist {
    name?: string,
    active: boolean, // ?: mean optional
    albums: stringOrNumberArray,
}

type UserId = stringOrNumber;

// Literal Types
let myName: 'Dave';
myName = 'Dave';
// myName = 'John'; // exception

let username: 'Dave' | 'John' | 'Amy';
username = 'Amy';

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMessage = (message: any): void => {
    console.log(message);
}

logMessage('hello!');
logMessage('hello!');
logMessage(add(2, 3));
logMessage('hello!');

let subtract = function (c: number, d: number): number {
    return c - d;
}

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
    (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMessage(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number) => {
    if (typeof c != "undefined") {
        return a + b + c;
    }
    return a + b;
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2) => {
    return a + b + c;
}

logMessage(addAll(2, 3, 4));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMessage(total(1, 2, 3, 4));

const createError = (errMsg: string) : never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i : number = 1;
    while(true) {
        i++;
        if(i > 100) break;
    }
}

const isNumber = (value: any) : boolean => {
    return typeof value === 'number' ? true : false;
}

const numberOrString = (value: number | string): string => {
    if(typeof value === 'string') return 'string';
    if(isNumber(value)) return 'number';
    return createError('This should never happen!');
}