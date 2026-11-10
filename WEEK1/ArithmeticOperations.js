
// CN5006 - Week 1 Portfolio
// Basic JavaScript Arithmetic Operations

// Function for Addition
function Addition(num1, num2)
{
    console.log("Addition: " + (num1 + num2));
}

// Function for Subtraction
function Subtraction(num1, num2)
{
    console.log("Subtraction: " + (num1 - num2));
}

// Function for Multiplication
function Multiplication(num1, num2)
{
    console.log("Multiplication: " + (num1 * num2));
}

// Function for Division
function Division(num1, num2)
{
    if (num2 !== 0)
    {
        console.log("Division: " + (num1 / num2));
    }
    else
    {
        console.log("Error: Cannot divide by zero");
    }
}

// Display current date and time
const currentDateTime = new Date();

console.log("CN5006 - Week 1 Portfolio");
console.log("Basic Arithmetic Operations");

console.log("Program run on: " +
    currentDateTime.toLocaleString());

// Declare two numbers
var Number1 = 20;
var Number2 = 5;

// Display numbers
console.log("\nFirst Number: " + Number1);
console.log("Second Number: " + Number2);

// Calling arithmetic functions
Addition(Number1, Number2);

Subtraction(Number1, Number2);

Multiplication(Number1, Number2);

Division(Number1, Number2);

console.log("\nProgram ended");
