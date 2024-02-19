// # ****Loops Exercise****
// Your assignment is to write the correct JavaScript for the following problems.


// ## **Numbers up to ten**
// Using a ***for loop*** console.log all the numbers from 0 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
};
console.log('Question 1 complete!')

// Using a ***while loop*** console.log all the numbers from 0 to 10
let n = -1
while (n < 10) { 
    n++;
    console.log(n);
};
console.log('Question 2 complete!')

// ## **Even numbers to 20**
// Using a ***for loop*** console.log all the even numbers from 0 to 20

for(let even = 0; even <= 20; even+=2){ // +=2 necessary or else infinite loop (dont ask how I know)
    console.log(even);
};
console.log('Question 3 complete!')

// ## **Odd numbers to 20**
// Using a ***while loop*** console.log all the odd numbers from 0 to 20

let odd=1
while(odd <= 20){
    odd += 2;
    console.log(odd);
};
console.log('Question 4 complete!')

// ## **Back to zero**
// Using a ***for loop*** console.log all the numbers from 10 to 0.

for(let minus= 10; minus>= 0; minus -= 1) {
    console.log(minus);
}
console.log('Question 5 complete!')