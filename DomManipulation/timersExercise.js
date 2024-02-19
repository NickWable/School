//Write a function called countdown that accepts a number as a parameter 
//and every 1000 milliseconds decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.

function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time === 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }

  console.log(countDown(10));

// Write a function called randomGame that selects a random number between 0 and 1
// every 1000 milliseconds and each time that a random number is picked,
// add 1 to a counter. If the number is greater than .75, stop the timer and console.log
// the number of tries it took before we found a number greater than .75.

function randomGame() {
  let counter = 0;
  const interval = setInterval(() => {
    const randomNum = Math.random();
    counter++;

    console.log(`Try #${counter}: Random number = ${randomNum}`);

    if (randomNum > 0.75) {
      console.log(`Found a number greater than 0.75 after ${counter} tries.`);
      clearInterval(interval);
    }
  }, 1000);
}

console.log(randomGame());