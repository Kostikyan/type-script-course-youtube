class Coder {

    secondLang!: string;

    constructor(
        public name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return this.age;
    }
}

const Dave = new Coder('Vahe', 'Erg', 16);
console.log(Dave.getAge());
// console.log(Dave.age); error because age is private;
// console.log(Dave.lang); error because lang is protected;

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
    }

    public getLang() {
        return this.lang;
    }
}

const webDev = new WebDev('Computer', 'Name', 'Music', 22);
console.log(webDev.getLang());
console.log(webDev.getAge());

///////////////////////////////////

interface Musician {
    name: string,
    instrument: string,

    play(action: string): string
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return action;
    }
}

const page = new Guitarist('Jimmy', 'guitar');
console.log(page.play('strums'));

///////////////////////////////////

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }

}

const john = new Peeps('John');
const steve = new Peeps('Steve');
const amy = new Peeps('Amy');

console.log(amy.id)
console.log(steve.id)
console.log(john.id)
console.log(Peeps.getCount()); // 3

///////////////////////////////////

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return;
        } else throw new Error('Param is not an array of strings');
    }
}

const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Bloods', 'ZZ Top'];
console.log(myBands.data);
myBands.data = ['Van Halen', 'Crips'];
