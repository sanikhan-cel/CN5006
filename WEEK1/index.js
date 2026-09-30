console.log("This is my first program")

const prompt = require('prompt-sync')();

//This line is essential
console.log("starting")
const name =prompt('enter your name: ');
console.log(`hello, ${name}`);
// program that checks if the number is positive, negative or zero
// input from the user

const number = parseInt(prompt("enter a number"), 10);

//check if the number is positive
if(number > 0)
{console.log(" The number is positive")

}
//check if the number is 0
else if( number==0 ) 
{
    console.log(" The number is zero")
}

