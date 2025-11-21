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

const mixedJuice = fruitBlender(5, 8);
console.log(mixedJuice);

const orangeJuice = fruitBlender(0, 8);
console.log(orangeJuice);


//function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

//funtion expression
const age1 = calcAge1(1979);
console.log(age1)

const calcAge2 = function (birthYear) {
    return 2046 - birthYear;
}

const age2 = calcAge2(1979)
console.log(age2);

//Arrow Function
const calcAge3 = birthYear => 2045 - birthYear;

const age3 = calcAge3(1979)
console.log(age3);