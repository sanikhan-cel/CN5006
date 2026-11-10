// CN5006 Lab Session week3
// JavaScript Fundamentals
// Sani Khan

// Exercise 1: JavaScript Function

function StudentInfo(name, StudentID, LabGroup)
{
    console.log("Student Name: " + name);
    console.log("Student ID: " + StudentID);
    console.log("Lab Group: " + LabGroup);
}

// Display current date and time
const currentDateTime = new Date();

console.log("CN5006 Lab Session JavaScript Fundamentals");
console.log("Prepared by Sani Khan");

console.log("Program run on: "
+ currentDateTime.toLocaleString());

// Student details
var StudentName = "Sani Khan";
var StudentID = "U3016709";
var LabGroup = " Group 7";

// Calling the function
StudentInfo(StudentName, StudentID, LabGroup);


// Exercise 2: Arrow Function

const FavouriteLanguage = (language) => {
    console.log("Favourite Programming Language: " + language);
};

// Calling arrow function
FavouriteLanguage("JavaScript");


// Exercise 3: Calculate Verification Number

// Get last 4 digits of Student ID
const lastFourDigits = StudentID.slice(-4);

// Add the last 4 digits together
var verificationNumber = 0;

for (let i = 0; i < lastFourDigits.length; i++)
{
    verificationNumber += Number(lastFourDigits[i]);
}

// Display verification number
console.log("Verification Number: " + verificationNumber);


// Program ended
console.log("Program ended");