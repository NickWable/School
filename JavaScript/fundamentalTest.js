//=================
// 1. repeat function
//=================
function repeat(str,multiplier) {
    if (multiplier <= 0) {
        return '';
    }
    else {
        return str + repeat (str, multiplier -1);
    }
}
//test
const stringToRepeat = 'Hello, world! ';
const repeatedString = repeat(stringToRepeat, 3);
console.log('Question 1', repeatedString);


//=================
// 2. removeFromString function
//=================

function removeFromString(str, idx, count) {
    let newStr = '';
  
    for (let i = 0; i < str.length; i++) {
  
      if (i < idx || i >= idx + count) {
  
        newStr += str[i];
      }
    }
    return newStr;
  }
  
  const removeFromStringTest = removeFromString('this totally works', 5,8);
  console.log('Question 2', removeFromStringTest);


  //=================
  // 3. Reverse function
  //=================

  function reverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]); //use .push to add a varible for each iteration
    }
    return reversedArr;
    }
    
    const arrTest= ['Icey', 'Yatchila', 'Redaim'];
    const questionThree= reverse(arrTest);
    console.log('Question 3', questionThree);


 //=================
 // 4. min function
 //=================

function min (minArr) {
let minValue = minArr[0];
for (let i = 1; i < minArr.length; i++) {
    if (minArr[i] < minValue) {
        minValue = minArr[i];
    }
}
return minValue;
}

//test
const minNumbers = [10,100,50,75,3,999];
console.log('Question 4', min(minNumbers))


//=================
// 5. slice function
//=================

function slice(arr, start, end) {
    let newArr = [];
    let newEnd = (end > arr.length) ? arr.length:end;
    for (let i = start ; i < newEnd; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
    }

// Test
let sliceArr = [10, 20, 30, 40, 50, 60];
let sliceResult = slice(sliceArr, 2, 5);
console.log('Question 5', sliceResult); // Output: [30, 40, 50]


//=================
// 6. keys function
//=================

function keys(obj) {
    let keyArr = [];
    for (let key in obj) {
            keyArr.push(key);
        }
    return keyArr;
}
//test 
const keyPerson = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  const keysArray = keys(keyPerson);
  console.log('Question 6',keysArray); // Output: ["name", "age", "city"]

//=================
// 7. values function
//=================

// function values(obj) {
//     let valueArr = [];
//         if (obj.hasOwnProperty(key)) {
//             valueArr.push(obj[key]);
//         }
//     return valueArr;
// }
//test 
// const valuePerson = {
//     name: "John",
//     age: 30,
//     city: "New York",
//   };
  
//   const valuesArray = values(valuePerson);
//   console.log('Question 7',valuesArray); // Output: ["John", 30, "New York"]


//=================
// 8. swapKeyAndValue function
//=================

function swapKeyAndValue(obj, keyToSwap) {
    const newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === keyToSwap) {
          newObj[obj[key]] = key;
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
  //test
  const swapPerson = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  const newPerson = swapKeyAndValue(swapPerson, "name");
  console.log('Question 8', newPerson);


//=================
// 9. multiples function
//=================

  function multiples(x,n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
    }
//test 
console.log('Question 9', multiples(5, 4));


//=================
// 10. pluck function
//=================

function pluck(json, value) {
  var obj = JSON.parse(json);
  let result = [];
  
for (let i of obj) {
  let jValue = i[value];
  result.push(jValue !== undefined ? jValue : -1);
}
return result;
}
//test
const pluckObj = '[{"name":"John","age":30},{"name":"Jane","city":"New York"},{"name":"Bob","occupation":"Engineer"}]';
const pluckName = "name";

console.log('Question 10', pluck(pluckObj, pluckName));


//=================
// 11. twoHighest function
//=================

function twoHighest(arr) {
  let highest = arr[0];
  let secondHighest = arr[1];
  
  if (secondHighest > highest) {
      [highest, secondHighest] = [secondHighest, highest];
  }
  
  for (let i = 2; i < arr.length; i++) {
      if (arr[i] > highest) {
          secondHighest = highest;
          highest = arr [i];
      }
  else if (arr[i] > secondHighest) {
      secondHighest = arr[i];
  }
  }
  return [secondHighest, highest];
  }
  //test
  const arr1 = [10, 25, 15, 30, 20];
console.log('Question 11', twoHighest(arr1));

//=================
// 12. 
//=================

function minMaxKeyInObject(json) {
  var obj = JSON.parse(json);
let lowestKey = 0;
let highestKey = 0;

for (let key in obj) {
  const numericKey = Number(key);
  if (!isNaN(numericKey) && (lowestKey === 0 || numericKey < lowestKey)) {
    lowestKey = numericKey;
  }
  if (!isNaN(numericKey) && (highestKey === 0 || numericKey > highestKey)) {
    highestKey = numericKey;
  }
}

return [lowestKey, highestKey];
}
//test
const json2 = '{"8":"eight","4":"four","12":"twelve","9":"nine","15":"fifteen"}';
console.log('Question 12', minMaxKeyInObject(json2));

//initialize 2 varibles to track the lowest and highest keys in the object
//use a for...in loop to iterate over each key in the object
//use 'Number(key)' to convert each key into its corresponding numeric value
//check if 'numericKey' is a valid number and if its smaller than the current 'lowestKey', if so then update 'lowestKey'
//do the same for 'highestKey'
//return 'lowestKey' , 'highestKey'


//=================
// 13. stringFromObject
//=================

function stringFromObject(obj) {
  let result = '';
  let isFirst = true;

  for (let key in obj) {
    if (typeof obj[key] !== 'function') {
      if (!isFirst) {
        result += ', ';
      } else {
        isFirst = false;
      }
      result += `${key}=${obj[key]}`;
    }
  }

  return result;
}
//test
const stringPerson = {
  name: "John",
  age: 30,
  city: "New York",
  sayHello: function() {
    console.log("Hello!");
  },
};

console.log('Question 13' ,stringFromObject(stringPerson));


//=================
// 14. countNumbers function
//=================

function countNumbers(arr) {
  let count = 0;
  
  for (let str of arr) {
      if (!isNaN(+str)) {
          count++
      }
  }
  return count
  }
  //test
  const countArr = ["apple", "123", "banana", "456", "cherry", "789"];
console.log('Question 14', countNumbers(countArr));

//=================
// 14. Remainder of 3 or 5
//=================

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++){
      if (i % 3 === 0 && i % 5 === 0){
          console.log('FizzBuzz'); }

      else if (i % 3 === 0) {
          console.log('Fizz'); }

      else if (i % 5 === 0) {
          console.log('Buzz'); }
          
      else {console.log(i); }
  }
}
