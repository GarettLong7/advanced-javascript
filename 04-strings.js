let a = 'she sells seashells';
let b = "jack and jill went up the hill";

// we can open and lose with double quotes and use single quote inside
console.log("she said that she didn't lnow anything");

// as long as we open and close with the same type of quotes, a character
// can go into the string
console.log('she said, "i do not know anything"');

//there's a way to tell the programming language that character
// is to be taken literally (i.e. part of the string, and not part of the program)
// i.e. escape sequence - we start if by putting a \
console.log('She said, "I don\'t know anything"')

let filepath="C:Users\\abc\\documents\\abc.jpg";
console.log(filepath)

// special escape sequence
console.log("Dear sir, \n\tyou owe $50 dollars.");

function calculateLateFees(fee) {
    if (fee>100) {
        return fee * 1.1;
    } else {
        return fee * 21.03;
    }
}

// backtick strings aka string literals
let name = "Tan Ah Kow";
const letter = `Dear ${name},
    
    Dear Sir, 
            Our motto is blah blah blah
    you owe us ${calculateLateFees(price)} dollars, inclusive of ten percent late fees.
            `

console.log(letter);


