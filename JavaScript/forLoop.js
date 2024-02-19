
{/* <script src='forLoops.js'></script> */}

//=================
//Loops allow you to repeat code. there are multiple types (for loop, while loop, for... of loop, and for...in loop)
//=================

// Loop 10 total times
// for (
//     [initialExpression]; 50 initial value
//     [condition]; 60 when to run the loop
//     [incrementExpression] +1 how to change the value each time
// );

for(let i = 1; i <= 10; i++){
    console.log('Trihard 7',[i]);
}
// "i" is a varible, it can be anything but most people use i because its easy
// the following loop will multiply each number by itself up to 20 (1x1, 2x2, 3x3, 4x4, 5x5)
for (let num = 1; num <= 20; num++) {
    console.log(`${num}x ${num} = ${num * num}`); 
}
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// 11 x 11 = 121
// 12 x 12 = 144
// 13 x 13 = 169
// 14 x 14 = 196
// 15 x 15 = 225
// 16 x 16 = 256
// 19 x 19 = 361
// 20 x 20 = 400

// the following loop will count down from 200 by intervals of 25

for(let i= 200; i>= 0; i -= 25) {
    console.log(i);
}
console.log ('Loop is complete!');
// 200
// 175
// 150
// 125
// 100
// 75
// 50
// 25
// 0
// Loop is complete!

//=================
//infinite loops happen when the ending condition is never met. 
//=================

//DO NOT RUN THIS CODE!
// for (let i = 20; i >=0; i++){
//     console.log(i);
// }
//DO NOT RUN THIS CODE!

//This is an infinite loop because i is already greater than 0 so it will run forever at incriments of 1.
//Try to only use <,>,<=,>= for the condition to avoid infinite loops. although you can use ==, ===, !==, !=== if you have to

//=================
//For loops + Arrays
//=================

const voidBreeders = [
    {
        Dino : 'Tuso',
        HP: 72000,
        Stamina: 1200,
        Damage: 595
    },
    {
        Dino: 'Megalodon',
        HP: 10000,
        Stamina: 900,
        Damage: 500
    },
    {
        Dino: 'Basi',
        HP: 130000,
        Stamina: 1200,
        Damage: null
    }
]

//This loop displays the HP of each dino
// for (let i= 0; i < voidBreeders.length; i++) {
//     let breeder = voidBreeders [i];
//     console.log(`${breeder.Dino} has ${breeder.HP} health`);
// }

//This loop will avg the HP of all of the dinos
let totalHP = 0;
for (let i = 0; i < voidBreeders.length; i++) {
    let breeder = voidBreeders [i];
    totalHP += breeder.HP;
}
console.log(totalHP / voidBreeders.length);

//The following loop will reverse a word and put it into a new array

const word = 'saggin';
let reversedWord = '';
for(let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
    console.log(reversedWord); // if this is inside curly braces it will display n, ni, nig, nigg, nigga, niggas
}
console.log(reversedWord);

//=================
//Nested for loops
//=================
//For nested loops the 'outter loop' will run 1 time and the 'inner loop' will run a whole cycle before the 'outter loop' runs a 2nd time
for (let i = 1; i <= 10; i++) {
    console.log('OUTTER LOOP:', i); 
    for (let j = 10; j >= 0; j-= 2) {
        console.log ('    Inner LOOP', j);
    }
}

// The following loop adds all of the varibles together in 'gameBoard'
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
        totalScore += row[j];
    }
}
console.log(totalScore)
