//=================
//Arrays are ordered collections of values.
//=================

let shoppingList = ['Bread', 'Milk', 'Eggs'];

let lotto = [45,12,23,25,34];

let myCollection = [12, 'dog', true, null, NaN ]; 
//You can combine data types, (strings, numbers, true, false)
//Arrays are indexed. You can access every item starting from 0

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors.length; // Length = 7

colors[0]; // "red"
colors[6]; // "violet"
colors[7]; // "undefined" index is numbered 0-6
colors[colors.length-1]; // "violet"

//=================
//You can modify arrays unlike strings
//=================

let voidMembers = ['Mike', 'Stickler','Beefy', 'Potato', 'Yatchila', 'Butcher'];

voidMembers[4] = 'Hailey'; // overrides the value 'potato' to 'hailey'
voidMembers[7] = 'Anna'; //Adds 'anna' to the array
voidMembers[voidMembers.length] = 'Scuba'; //Another way of adding to the array because you dont need to know the length of array
voidMembers[voidMembers.length] = 'Lopao'; // Repeatable, and will always add to the end of the array

//=================
//Array methods (push, pop, shift, unshift)
//=================
let topSongs = [
    'Persuit of happiness',
    'Stronger',
    'Dyer Maker',
    'Fly me to the moon',
];

topSongs.push('Fortunate Son'); //Better way to add to the end of array. Repeatable
topSongs.pop(); //removes the LAST item in the array
topSongs.shift(); // REMOVES the FIRST item in the array
topSongs.unshift(); //ADDS to the BEGININING of the array

//=================
//Array method (.concat), combines 2 or more arrays into a new COPY 
//=================

let fruits = ['apple', 'banana'];
let veggies = ['green beans', 'squash'];
let meats = ['chicken', 'steak', 'pork'];

console.log(meats.concat (veggies)); // the order matters
let allFood = fruits.concat(veggies, meats); //combines fruits, veggies, and meats (in that order)

//=================
//Array method (.slice) creates a copy of an array using the index values of an array
//=================

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice (0,3); //index from 0-3 selects 0,1,2 NOT 3. 
let mammals = animals.slice(2,4);
// instead of let reptiles = animals.slice(4,6)
let reptiles = animals.slice(4); // if you use only 1 index it will select everything from that index
let quadruped = animals.slice(-3); // negative indexes will select from the end of the array

//=================
//Array method (.splice), remove/replace elements in an array
//splice(start: number, deleteCount?: number | undefined): string[]
//=================

let tickers = ['$AMC', '$TSLA', '$APPL', '$NVDA', '$META', '$PYPL', '$MARA', '$RIOT'];

tickers.splice(1,0,'$SPY'); //Adds '$SPY' after '$AMC' to the array (can add multiple values and order matters)
tickers.splice(4,2) // Deletes '$META' and '$PYPL' from the array
