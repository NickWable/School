//=================
//Question 1
//=================
function difference(x,y) {
    return(x-y);
}
difference(2,2); // 0
difference(0,2); // -2


//=================
//Question 2
//=================
function product(x,y) {
    return(x*y);
}
product(2,2); // 4
product(0,2); // 0


//=================
//Question 3
//=================
function printDay(num) {
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
return dates[num];
}


//=================
//Question 4
//=================
function lastElement(arr) {
return arr[arr.length -1];
}


//=================
//Question 5
//=================
function numberCompare(x,y) {
    if (x === y) {
        return 'Numbers are equal';
    }
    if (x > y) {
        return 'First is greater';
    }
    if (x < y) {
        return 'Second is greater';
    }
}


//=================
//Question 6
//=================
function singleLetterCount(str1, letter){
    let finalCount = 0;
    for(let i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }


//=================
//Question 7
//=================
function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }


//=================
//Question 8
//=================
  function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }


//=================
//Question 9
//=================
function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    // for(let i =0; i<str.length/2; i++){
    //   if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
    //     return false;
    //   }
    // }
    // return true;
  }

//=================
//Question 10
//=================
function RPS(){

    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked " +  computerChoice;
  }