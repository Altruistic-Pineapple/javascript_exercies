'use strict';
/*
let hasDriversLiscense = false;
const passTest = true;

if (passTest) hasDriversLiscense = true;
if (hasDriversLiscense) console.log("I can drive);")
*/

function logger() {
    console.log("My name is Will");
}

logger();
logger();
logger();

function fruitBlender(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitBlender(5, 2);
console.log(appleJuice);