// string query functions give information about a string

// example: inclues - find a smaller string within a bigger string
let fruits = "apples, bananas, oranges, pineapples";

// find out if the fruit strings include oranges
console.log("Does fruits have oranges?", fruits.includes("orange"));

// indexOf: find and return the index of the start of a substring
let sentence ="the quick brown fox jumps over the lazy dog";
console.log("fox starts at index", sentence.indexOf("fox"));

// .endsWith check if the ending of a string is that particular sub-string
// check file extension - check file is a .mp4
const filename = "movie.mp4";
if (filename.endsWith('.mp4')) {
    console.log("This is a MP4 file")
    } else {
        console.log("This is not a MP4 file");
}

// using prompt, ask the user to enter their email address
// the email address must contain at most one @,
// and must be one of the following domain: .edu or .edu.sg

const prompt = require('prompt-sync')();
let emailAdd = prompt("Please enter your email address ");

if ((emailAdd.includes("@")) && ((emailAdd.endsWith(".edu")) || emailAdd.endsWith(".edu.sg"))) {
    console.log("ok")
} else {
    console.log("not ok")
} 

// use indexOf and lastIndexOf and ask if they match to check if there's only 1 '@'