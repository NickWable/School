// What does the following code return?
new Set([1,1,2,2,3,4]); // ?
// 1,2,3,4

// What does the following code return?
[...new Set("referee")].join(""); // ?
// "ref"

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr){
    return new Set(arr).size !== arr.length
}
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str){
    const vowels = "aeiou";
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase();
        if(vowels.includes(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            } else {
                vowelMap.set(lowerCaseChar, 1)
            }
        }
    }
    return vowelMap;
}
// vowelCount('Levi') // Map {'e' => 1, 'i' => 1}
// vowelCount('Callie') // Map {'a' => 1, 'i' => 1, 'e' => 1}
// vowelCount('Emma') // Map {'e' => 1, 'a' => 1}
// vowelCount('Tim') // Map {}
