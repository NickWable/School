//=================
//Objects are collections of properties
//Properties are a key-value pair
// Rather than using an index, we use custom 'keys'
//=================

const fitbitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};

//=================
//Access the data by using the '.' syntax. (fitbitData.length)
//=================

fitbitData.totalMiles // 211.7

const numbers = {
    100 : 'one hundred',
    16 : 'sixteen',
    9999 : 'nine thousand nine hundred and nienty nine'
}

let mysteryNumber = '16';

// If the key is a number then you must use [] to access the data

numbers[100],
numbers['9999'];
number[mysteryNumber]; // 16

//=================
//To add to an object you can use '.' or [] = varible; 
//=================

const userReviews = {}; //empty object

userReviews['Jhap47'] = 5.0;
userReviews.EranVonBaron = 1.0;

//=================
//Update values by using + , - , += , -=
//=================

userReviews['Jhap47']  ++; // changes rating from 5.0 to 6.0
userReviews.EranVonBaron --; // changes rating from 1.0 to 0

// Keys can be arrays and you can nest objects as keys

const student = {
    firstName : 'Isaac',
    lastName : 'Henderson', 
    strenghts : ['Music', 'Coding'],
    exams : {
        midterm : 92,
        final : 88
    }
};

//find the avg of exam scores

const avg = (student.exams.midterm + student.exams.final) / 2; //90

// use the index of the nested array to find 'coding'
student.strenghts[1] // coding

//=================
// Array of objects
//=================

const shoppingCart = [
    {
        product : 'NVIDIA GeForce RTX 4090',
        price : 1599,
        quantity : 1
    },
    {        
        product : 'Intel Core i9-13900KF',
        price : 544.99,
        quantity : 1
    },
    {
        product : 'Dark Rock pro 4 CPU Cooler',
        price : 89.90,
        quantity : 1
    },
    {
        product : 'Gigabyte Z790 Motherboard',
        price : 249.99,
        quantity : 1
    },
    {
        product : 'Corsair Vengeance 64 GB (2 x 32 GB) DDR5 Memory',
        price : 259.99,
        quantity : 2
    },
    {
        product : 'Samsung 980 Pro 2 TB SSD',
        price : 119.99,
        quantity : 2
    },
    {
        product : 'Fractal Design Meshify 2 ATX Mid Tower Case',
        price : 159.99,
        quantity : 1
    },
    {
        product : 'Corsair RM1000x 80+ Gold Power Suppy',
        price : 169.99,
        quantity : 1
    },
];

//=================
//Tick, tack, toe game
//=================
const game = {
    player1 : {
        username : 'Yatchila',
        playingAs : 'X'
    },
    player2 : {
        username : 'RedAim',
        playingAs : 'O'
    }, 
    board : [
        ['O', null, 'X'],
        [null, 'O', 'X'],
        [null, 'O', 'X']
    ]
};

//=================
//Objects Exercise 
//=================
let programming = { //can use let but const is better
    languages: ["JavaScript", "Python", "Ruby",],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

// 1. Write the command to add the language “Go” to the end of the languages array.
programming.languages + 'Go';

// 2. Change the difficulty to the value of ***7***.
programming.difficulty = 7;
// 3. Using the ***delete*** keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// 4. Write the command to add a new key called ***isFun*** and a value of ***true*** to the programming object.
let isFun = programming