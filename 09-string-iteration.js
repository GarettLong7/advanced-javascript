// because a string can be accessed by an index,
// we can use a while loop to extract individual character
let s = "she sells seasheell at the seashore";

// we want to count how many s in the string
let numberofS = 0;
let index = 0;
while (index < s.length) {
    if (s[index].toLowerCase() === 's') {
        numberofS += 1;
    }
    index++;
}
console.log("Number of S found =", numberofS);

// given a string, find the longest sequence of repeating characters
// string = "aabbcc" => 3
// string ='abcddeefff => 3
// string = 'aaaabbccd' => 4
// string = 'abc' => 1

const prompt = require('prompt-sync')();
const text = prompt("PLease enter text: ");
let answer = 1;
let maxCount = 1;
let sequenceCharacter = text[0];
let i = 1; //checking from index 1 instead of 0 since we already assume 
while (i < text.length) {
    // check the current i is still part of the sequence
    if (text[i] === sequenceCharacter) {
        answer += 1;
    } else {
        sequenceCharacter = text[i];
        answer = 1;
        
        }if (answer > maxCount) {
            maxCount = answer;
    }
    i++;
}



