alert("Its working")
//PART 1

//1. True
2 == "2";

//2. True
2 === 2;

//3. 1
10 % 3;

//4. True
10 % 3 === 1;

//5. False
true && false;

//6. True
false || true;

//7. True
true || false;

//PART 2

let isLearning = true;
if(isLearning){
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}

//1. What should the above code console.log? 
//'true "keep it up!"'

//2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
// Because we are asking a yes or no question and don't need to be that specific. The "else" runs if false.

//PART 3

let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if(firstVariable){
  console.log("first");
} else if(firstVariable || secondVariable){
  console.log("second");
} else if(firstVariable || thirdVariable){
  console.log("third");
} else {
  console.log("fourth");
}

//1. What should the above code console.log? Why?
// "third" because 1 is the first 'true' value 

//2. What is the value of firstVariable when it is initialized?
//undefined

//3. Is the value of firstVariable a “truthy” value? Why?
//No, it has a falsey value. Because 'undefined' is a falsey value.

//4. Is the value of secondVariable a “truthy” value? Why?
// Empty quotes are always false. So the second varible is falsey

//5. Is the value of thirdVariable a “truthy” value? Why?
// The third varible is truthy because any number other than 0 is true.

//Math.floor(Math.random() * 10) +1;

//PART 3

if (Math.random() > 0.5 ) {
console.log ("Greater than 0.5");
}
else {
    console.log("less than 0.5");
}

//A falsey value is a value that evaluates to false when inside of a conditional statement
//(if, else if, case). Inside of these conditional statements, the result will always be true 
//or false regardless of what values are passed to the condition. The falsey values (values 
//that will always be evaluated to false inside of a condition) in JavaScript are 0, “”, false, null, undefined and NaN.