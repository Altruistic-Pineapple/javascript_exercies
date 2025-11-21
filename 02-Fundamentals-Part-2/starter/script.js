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

function calculateTotal(Cost, Tax) {
    return Cost + (Cost * Tax);
}

console.log(calculateTotal(5, .08));


function numberAdded(num1, num2) {
    return num1 + num2;
}
console.log(numberAdded(1, 2));

console.log(numberAdded(5, 6));


function numberDivided(number1, number2) {
    return number1 / number2
}
console.log(numberDivided(10, 5))

function numberSubtracted(numb3r1, numb3r2) {
    return numb3r1 - numb3r2;
}
console.log(numberSubtracted(10, 5))

function sentenceCreated(word1, word2) {
    return word1 + word2
}
console.log(sentenceCreated("The", " Sopranos"))




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

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firtstName} retires in ${retirement} years`;
}

const retirement = yearsUntilRetirement(1979, "Will");
console.log(retirement);

//function within a fumction
/*
function cutFruitPieces(fruit) {
    return fruit = 4;
}


function fruitBlender(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitBlender(5, 2);
console.log(appleJuice);*/
