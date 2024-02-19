//functions can be passed as arguments

function greet() {
    console.log ('Hello!')
}

function salt(){
    console.log (" You're weak ")
}

function repeatThreeTimes(func) {
    func();
    func();
    func();
}
//repeatThreeTimes (greet)

function repeat (num, func) {
    for(let i = 0; i < num; i++){
        func()
    }
}
//repeat(4,salt)

//You can put functions in an array and execute them from the array
let funcs = [greet, salt]
//funcs[0]() executes greet


//functions can be stored inside varibles 
const myFunc = function add(x, y) {
    return x + y;
}

//NESTING FUNCTIONS

function makeMultiplyFunc (num) {
    return function mult(x) {
        return num * x;
    }
}
const double = makeMultiplyFunc(2)
//double(9) 18
const quad = makeMultiplyFunc(4)
//quad(9) 36

//SETTING TIMERS

// setTimeout( function, delay in ms);
setTimeout( salt, 3000);

//setInterval has the same structure as timeout but it will loop until told otherwise
const greetSwitch = setInterval(greet, 2000) 
clearInterval(greetSwitch);

//Anonymous functions do not have a name, you can not call them unless you store them in a varible
setTimeout(function(){
    salt();
    salt();
    greet();
} , 2000)