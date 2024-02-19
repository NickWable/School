//WONT WORK IN INTERNET EXPLORER LMAO
//Iterable is an object which can be looped over or iterated over with the help of a for loop. 

//for (variable of iterable) {
//     statement
// }

//difference of for loop and for of loop (they are both logging the same result)
// for of loop is better in this scenario
let subReddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let i = 0; i < subReddits.length; i++) {
   console.log(subReddits[i]); 
}

for( let sub of subReddits) {
    console.log(sub)
}


const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

for (let row of magicSquare) {  // creates varible 'row' of the iterable 'magicSquare'
    let sum = 0; // blank sum varible so the loop can update
    for (let num of row) { // creates varible inside of row varible
        sum += num; // adds the 2 together for each row before running the next row
    }
    console.log(`${row} summed to ${sum}`);
}

//example of a for loop being better than a for of loop
// to combine 1 word from both arrays (mail, box) 
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) { //i is the index of the array 0-3
    console.log(words1[i], words2[i]); //logs each index of both arrays before moving to the next index
}

//=================
//for-of loops with objects o iterating over objects
//=================

//Object.keys (Arrival, Akien ect.) case sensitive 
//Object.values (9.5, 9 ect.) case sensitive
// if you want to access both keys and values use keys

const movieReviews = { 
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5,
};
//logs movie name and rating
for (let movie of Object.keys(movieReviews)) {
   console.log(movie, movieReviews[movie]) //movieReviews[movie] logs values 
}

//logs avg rating of all movies
const ratings = Object.values(movieReviews);
let total = 0;
for(let r of ratings) {
    total += r;
}
let avg = total /= ratings.length;
console.log (avg);