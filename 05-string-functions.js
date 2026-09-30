// string functions
// 1. tranformation functions

const PromptSync = require("prompt-sync");

// those functions modify and return a copy of a string
const favoriteFruit= "apples";

// call toUppercase on the string inside the favoriteFruit vairable
//the function does not change the original string, it returns a modified copy
console.log(favoriteFruit.toUpperCase());

const name = "TAN AH KOW";
console.log(name.toLowerCase());

// trim: remove white spaces to the front and to the back of a string
const email=" admin@def.com   ";
console.log("email without trim=>", email+"!");
console.log("email with trim=>", email.trim()+"!");

if (email.trim==="admin@def.com") {
    console.log("Welcome admin");
}

// using prompt-sync and prompt, ask the user to enter yes or no
// but the user could enter YeS, YES, yes, YEs ==> all must be recognized as yes
// and the user could enter no, NO, nO, No ==> all must be recognized as no
// and the user could include white spaces at the front or at the back
// use if/else to decidde if the user said yes or no

const prompt = require("prompt-sync")();
let yesNo = prompt("Please enter yes or no ");

yesNo = yesNo.trim().toLowerCase();

if (yesNo === "yes") {
  console.log("Yes");
} else if (yesNo === "no") {
  console.log("No");
}