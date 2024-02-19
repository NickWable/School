//While loops are syntactically more simple than for loops and they're more flexible sometimes
// while(condition = true) {
//     Run this code
// };

//In this example there are 2 lines of RNG. The first is the target and it is const. 
//The second is "let" because the guess will change until it matches the target.
const target = Math.floor(Math.random () * 10);
let guess = Math.floor(Math.random () * 10);

while (guess !== target) { // run while 'guess' is not equal to the target
    guess = Math.floor(Math.random () * 10);
    console.log(guess);
}
console.log(`Target: ${target} Guess: ${guess}`);


//=================
// Breaks stop the loop mostly used in while loops 
//=================

const question = Math.floor(Math.random () * 10);
let answer= Math.floor(Math.random () * 10);

while (true) { // avoid using while true because it is easy to start an infinite loop
    if (question === answer) break; // "break" or stop once the answer = the question
    answer = Math.floor(Math.random () * 10);
}
console.log(`Question: ${question} Answer: ${answer}`);

