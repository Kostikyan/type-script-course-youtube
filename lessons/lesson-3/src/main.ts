let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Start', 'Les Paul', 5010];
let mixedData = ['EVH', 1984, true];

stringArr[0] = 'a';
stringArr.push('hey');

guitars[0] = 1923;
guitars.unshift(`Jim`);

let test = []; // any data type
let bands: string[] = []; // strings
bands.push('Van Halen');

test.push('Van Halen');
test.push(['Van Halen', 'a', 1]);
test.push(true);
test.push(23);

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];
let mixed = ['John', 1, false];

// myTuple = mixed; problem
// mixed = myTuple; np

// Object
let myObj: object;
myObj = []; // to array
console.log(typeof myObj); // object
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}
exampleObj.prop1 = 'John';

type Guitarist = {
    name: string,
    active?: boolean, // ?: mean optional
    albums: (string | number)[],
}

let evh: Guitarist = {
    name: 'Vahe',
    active: false,
    albums: [1992, 1950, 'O203']
}

let jp: Guitarist = {
    name: 'Jimmy',
    albums: ['I', 'II', 'IV']
}

const greatGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}!`
}

console.log(greatGuitarist(jp));

interface Guitarist_2 {
    name?: string,
    active: boolean, // ?: mean optional
    albums: (string | number)[],
}

let jp_2: Guitarist_2 = {
    active: true,
    albums: ['I', 'II', 'IV']
}

const greatGuitarist_2 = (guitarist: Guitarist_2) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'hello!';
}

console.log(greatGuitarist_2(jp_2));

// Enums

enum Grade {
    U = 12, D, C, B, A
}
console.log(Grade.U);