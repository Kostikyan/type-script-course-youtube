"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
let o = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful! TS sees no problem - but a string is returned;
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string  // error
10;
// the DOM
const img = document.querySelector('img'); // const img: HTMLImageElement | null
const myImg = document.getElementById('img'); // const myImg: HTMLElement | null
const nextImage = document.getElementById('img'); // const myImg: HTMLElement | null
img.src;
myImg.src;
nextImage.src;
