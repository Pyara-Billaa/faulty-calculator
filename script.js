/* Create a faulty calculator using JavaScript

This faulty calculator does following :
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows :

+ --> -
* --> +
- --> /
/ --> **

It performs wrong operation 10% of the times */

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter 1st number : "));
let operator = prompt("Enter operator : ");
let num2 = Number(prompt("Enter 2nd number : "));
console.log("You entered "+num1+operator+num2);

const operations = {
    "+" : (a,b) => a+b,
    "-" : (a,b) => a-b,
    "*" : (a,b) => a*b,
    "/" : (a,b) => a/b,
    "**": (a,b) => a**b
}

const faultyOps = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"   
}

let random = Math.random();
let result;

if (random <= 0.1){
    let wrongOps = faultyOps[operator];
    console.log("Faulty alert! : " + wrongOps);
    result= operations[wrongOps](num1,num2);
} else{
    result = operations[operator](num1,num2);
}

console.log("Result : " + result);