type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world';
let e = <string>'world';
let o = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): Two => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// be careful! TS sees no problem - but a string is returned;
let nextVal: number = addOrConcat(2, 2, 'concat') as number;

// 10 as string  // error
(10 as unknown) as string;

// the DOM
const img = document.querySelector('img')!; // const img: HTMLImageElement | null
const myImg = document.getElementById('img') as HTMLImageElement; // const myImg: HTMLElement | null
const nextImage = <HTMLImageElement>document.getElementById('img'); // const myImg: HTMLElement | null

img.src;
myImg.src;
nextImage.src;

