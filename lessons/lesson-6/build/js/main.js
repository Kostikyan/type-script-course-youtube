"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder('Vahe', 'Erg', 16);
console.log(Dave.getAge());
// console.log(Dave.age); error because age is private;
// console.log(Dave.lang); error because lang is protected;
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const webDev = new WebDev('Computer', 'Name', 'Music', 22);
console.log(webDev.getLang());
console.log(webDev.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return action;
    }
}
const page = new Guitarist('Jimmy', 'guitar');
console.log(page.play('strums'));
///////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('John');
const steve = new Peeps('Steve');
const amy = new Peeps('Amy');
console.log(amy.id);
console.log(steve.id);
console.log(john.id);
console.log(Peeps.getCount()); // 3
///////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Bloods', 'ZZ Top'];
console.log(myBands.data);
myBands.data = ['Van Halen', 'Crips'];
