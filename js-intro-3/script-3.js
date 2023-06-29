console.log("script file started.");
//Conditionals
//Functions
//difference between == and ===
//examples of functions
// Making micro Js projects
// 1. Magic 8 ball simulator
// 2. Random Quote generator
// 3. Password Strength checker
// 4. fizz buzz game
// 5. Random dice roll
// 6. Rock, paper scissor game.
// 7. Reverse a string
// 8. Palindrome checker
// 9. Random color generator
// 10. Random password generator
// 11. Random image generator
// 12. Digital clock
// 13. Calculator
//Arrays
//Objects

//conditinals

// 1. If statement

let x = 11;
if (x > 10) {
  console.log("value is greater than 5");
}

// 2. If else statement

let age = 18;
if (age >= 18) {
  console.log("Age is greater than 18 and you are eligible to vote.");
} else console.log("not eligible to vote");

// 3. if else if else statement

let score = 85;
if (score > 90) {
  console.log("score is excellent");
} else if (score > 80) {
  console.log("score is good");
} else console.log("score is average");

// 4. Ternary Operator

let isRaining = false;

let weather = isRaining ? "take an umbrella" : "enjoy the weather";

// if(isRaining){
//     weather="take an umbrella";
// }else weather="enjoy the weather";

console.log(weather);

// 5. switch Statement

let day = 2;
let dayname;
// console.log(dayname)
switch (day) {
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayname = "Tuesday";
    break;
  case 3:
    dayname = "Wednesday";
    break;
  default:
    dayname = "Invalid input";
}

console.log(dayname);

// 6. Nested if statements
let xx = 10;
if (xx > 0) {
  if (xx % 2 == 0) {
    console.log(xx + " is even");
  } else console.log(xx + " is odd");
}

// 7. logical AND(&&) operator

let myage = 25;
let drivinglicense = true;
let todayweather = "bright";
if (myage > 18 && drivinglicense && todayweather == "bright") {
  console.log("yes you can take my car and drive.");
}

// 8. Logical OR (||) operator:

let color = "blue";

if (color == "red" || color == "blue") {
  console.log("color is either red or blue");
}

// 9. Nullish Colescing Operator (??)

let username; //if this is undefined or null
let displayname = username ?? "Anonymous User";

console.log(displayname);

// 10. extra example of conditional execution with the comma operator

let xxx = 5;
let y = 10;
xxx > y ? console.log("xxx is greater") : console.log("y is greater");

//FUNCTIONS!!! LET'S GOO!

// function allow the developer to encapsulate reusable blocks of code. It may consist of
// certain conditions, set of statements and might even calculate a value and return a value
// based on the use case.

// SYNTAX:
function funcation_name(parameter_taken) {
  //code to be executed
}

// Example 1:
function greet(name) {
  console.log(`Hello ${name}, nice to meet you.`);
}

greet("Ayush");
greet("Kasturi");

// function that returns a value

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,5));

// function prod(a,b){
//     return a*b;
// }

// console.log(prod(10,10));

let x1 = 101;
//TOPIC: Function scope
function myFuncation() {
  let x1 = 10;
  console.log("my number is", x1);
}
console.log(x1); // Reference Error: x1 is not defined
myFuncation();

//TOPIC: Arrow Functions
// Arrow function are a shorthand syntax for writing functions in js.
// The provide a more concise way to define functions.

// Syntax:
let arrow_function_name = (Parameter1, Parameter2) => {
  //code to be executed
};

function prod(a, b) {
  return a * b;
}

let arrowprod=(a,b)=>{
    for(let i=0;i<10;i++){
        console.log("hi")
    }
};

console.log(arrowprod(5,9));

// EXAMPLES OF ARROW FUNCTIONS:

// 1. function with no parameters
function sayHello(){
    console.log("hello, world!")
}

sayHello();

// 2. Functions with parameters and return value

function add(a,b){
    return a+b;
}
console.log(add(10,9));

// 3. Anonymous functions assigned to variable

// let greet= function(name){
//     console.log("greetings "+name)
// }

// document.addEventListener('click',function(){

// })

// 4. functions as a parameter

function consolesomething(message){
    console.log(message);
}

function power(a,b,func){
    func(a**b);
    func(a**b);
    func(a**b);
    func(a**b);
    func(a**b);
}

power(10,2,consolesomething);

// 5. Default Parameter

function greet_siri(name="User"){
    console.log("hello,"+name+" My name is siri.");
}
greet_siri();
greet_siri("Ayush");

// 6. Recursive Functions
function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}

console.log(factorial(5));


// let's start at 9:43
