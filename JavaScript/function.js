//Functions allow us to write reusable, modular code
// We define a 'chunk' of code that we can then execute at a later point.

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly braces

// function functionName(parameters,) {
//     do something
// }
// functionName() // to call the function

//=================
//Dice Roll
//=================
function rollDie () {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log (`Rolled: ${roll}`);
}
rollDie() //call

// ========================================================================

//rolls multiple die
function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie(5); //The number inside prens is called an "argument"
    }
}
throwDice(2) //rolls 2 die

//=================
//Basic math
//=================

//multiplys arguments together
function multiply (num) { //num = parameter 
    console.log (num * num);
}
multiply(7,7) //49

// ========================================================================

// adds arguments together
function add (x,y) { //order matters when adding multiple parameters
    console.log(x + y); 
}
add(4,6) // calls 10

// ========================================================================

//divides arguments together
function divide(a,b) {
    console.log(a / b);
}
divide(1,4) // calls 0.25
divide(4,1) // calls 4
divide(5) //calls NaN because one of the parameters 'b' is undefined 

//=================
//Return statement
//=================
// The return statement ends function execution AND specifies the value to be returned by that function
//can only return 1 value from a function. 
//You can have multiple return statements but call only 1 value return (4,6)
//nothing after a return statement will run

function square(x) {
    return x * x;
    console.log('This wont run') //the function stops once returned
}
square(4) //16

// ========================================================================

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
        console.log('Impossible!') // This will never run, either its true and the code stops or is false and the code doesnt run
    }
    else {//dont need 'else' because either its true or false and 'return' stops the code
        return false;
    }
}
isPurple ('blue'); // false
isPurple ('purple'); // true
isPurple('RED'); // false
isPurple('PURPLE'); // true

//simplified way of typing this function using a boolean format

    function isBlue(color) {
        return color.toLowerCase() === 'blue';
    }
isBlue('blue') // true 
isBlue('Purple') // false

// ========================================================================

//The return statement CANT be inside a loop. use {} around the return
function containsPurple(hue) {
    for (let color of hue) {
        if(color === 'purple' || color === 'lilac')
            {
            return true;
            } 
        }
    return false;
    }   
containsPurple(['purple', 'blue']); //true
containsPurple(['blue', 'yellow']);  //false
containsPurple(['lilac']);  //true


//=================
//Valid password function boolean
//=================

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
function isValidPassword (password, username) {
    if(password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1) {
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// ========================================================================

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(numbers) {
    let totalNum = 0;
for (let num = 0; num < avg.length; i++);{
    (num += totalNum[numbers[num]]);
} 
return totalNum / avg.length;
}

//Simplified answer
function average(arr) {
    let total = 0;
    //loop over each num
    for (let num of arr) {
        //add  them together
        total += num;
    }
    // divide by number of nums
    return total / arr.length;
}

// ========================================================================

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.
// Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(phrase) {
    let lowerCased = sentence.toLowerCase();
   for(let char of 'abcdefghijklmnopqrstuvwxyz') {
    console.log(char);
    if(lowerCased.indexOF(char) === -1) {
        return false;
    }
   }
   return true;
}

// ========================================================================

// Write a getCard() function which returns a random playing card object, like:
// 	    { value: 'K'
// 		  suit: 'clubs' }
//Pick a random value and suit from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//----clubs,spades, hearts, diamonds
//Return both in an object

function getCard() {
	const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	const valIdx = Math.floor(Math.random() * values.length);
	const value = values[valIdx];

	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitIdx = Math.floor(Math.random() * suits.length);
	const suit = suits[suitIdx];
	return { value: value, suit: suit };
}

//simplified version

function simplifiedCard() {
	const values = [
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}

//repeat 

function repeat(str,multiplier) {
    if (multiplier <= 0) {
        return '';
    }
    else {
        return str + repeat (str, multiplier -1);
    }
}

const stringToRepeat = 'Hello, world! ';
const repeatedString = repeat(stringToRepeat, 3);
console.log(repeatedString);