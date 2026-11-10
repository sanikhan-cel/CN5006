
// CN5006 Lab Session
// JavaScript Fundamentals

// Exercise 1: JavaScript Functions

function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name +
        " Your monthly Salary is " + Salary);
}

// Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");

console.log("Program run on: " +
    currentDateTime.toLocaleString());

var EmpName = "sani Khan";
var EmpSalary = 50000;

// Calling the function
EmployeeInfo(EmpName, EmpSalary);


// Exercise 2: Arrow Functions

const EmpSkills = (skills, Name, LabGrp) => {
    console.log("Student ID: " + Name +
        " Expert in " + skills);

    console.log("Lab Group Name: " + LabGrp);
};

// Calling arrow function
EmpSkills("JavaScript", "U3016709", " Group 7");


// Exercise 3: Local Modules

const student = require('./StudentInfo');
const person = require('./Person');

// Display student information
console.log("Student Name: " + student.getName());

console.log("Location: " + student.Location());

// dob is a variable, so no parentheses are needed
console.log("Date of Birth: " + student.dob);

// Studentgrade is a function
console.log("Student Grade: " + student.Studentgrade());

console.log("Grade is: " + student.Studentgrade(55));

// Create an object using Person class
const person1 = new person("Jim", "USA", "myemail@gmail.com");

console.log("Using Person Module: " +
    person1.getPersonInfo());

console.log("Program ended");


// Exercise 4: Node.js Core Modules

const os = require("os");
const util = require("util");

// Display operating system information

console.log("\n===== Node.js Core Modules =====");

console.log("Temporary directory: " + os.tmpdir());

console.log("Hostname: " + os.hostname());

console.log("OS: " + os.platform() +
    " Release: " + os.release());

console.log("Uptime: " + (os.uptime() / 3600).toFixed(2)
    + " hours");

console.log("User Info: " +
    util.inspect(os.userInfo()));

console.log("Memory: " +
    (os.totalmem() / 1000000000).toFixed(2)
    + " Gigabytes");

console.log("Free Memory: " +
    (os.freemem() / 1000000000).toFixed(2)
    + " Gigabytes");

console.log("CPU: " +
    util.inspect(os.cpus()));

console.log("Network: " +
    util.inspect(os.networkInterfaces()));

console.log("Program ended");
