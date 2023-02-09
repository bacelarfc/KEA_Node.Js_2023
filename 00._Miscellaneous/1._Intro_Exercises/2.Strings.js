// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

let resultOne = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(resultOne);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let resultFour = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);

console.log(resultFour)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


let floatOne = parseFloat(one);
let floatTwo = parseFloat(two);
let floatThree = parseFloat(three);

const total = floatOne + floatTwo + floatThree

const resultFive = (Math.round((total/3))/100).toFixed(5);

console.log(resultFive);


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2));


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const captalizedJ = fact.replace("j", "J");

console.log(captalizedJ);

// --------------------------------------