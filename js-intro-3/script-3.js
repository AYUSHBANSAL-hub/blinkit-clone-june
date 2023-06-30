console.log("script file started.");
// (done) Conditionals
// (done) Functions
// (done) difference between == and ===
// (done) examples of functions
// (done) Making micro Js projects
// 1. Magic 8 ball simulator
// 2. (done) Random Quote generator
// 3. (done) Password Strength checker
// 4. fizz buzz game
// 5. (done) Random dice roll
// 6. Rock, paper scissor game.
// 7. (HW) Reverse a string
// 8. (HW) Palindrome checker
// 9. (done) Random color generator
// 10.(done) Random password generator
// 11.(done) Digital clock
// 12.(HW) Calculator
// (done) Arrays
// (done) Objects

//conditionals

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

let arrowprod = (a, b) => {
  for (let i = 0; i < 10; i++) {
    console.log("hi");
  }
};

console.log(arrowprod(5, 9));

// EXAMPLES OF ARROW FUNCTIONS:

// 1. function with no parameters
function sayHello() {
  console.log("hello, world!");
}

sayHello();

// 2. Functions with parameters and return value

function add(a, b) {
  return a + b;
}
console.log(add(10, 9));

// 3. Anonymous functions assigned to variable

// let greet= function(name){
//     console.log("greetings "+name)
// }

// document.addEventListener('click',function(){

// })

// 4. functions as a parameter

function consolesomething(message) {
  console.log(message);
}

function power(a, b, func) {
  func(a ** b);
  func(a ** b);
  func(a ** b);
  func(a ** b);
  func(a ** b);
}

power(10, 2, consolesomething);

// 5. Default Parameter

function greet_siri(name = "User") {
  console.log("hello," + name + " My name is siri.");
}
greet_siri();
greet_siri("Ayush");

// 6. Recursive Functions
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// let's start at 9:43

// Random dice roll
function rolldice() {
  const RandomNumber = Math.ceil(Math.random() * 6);
  // alert("You rolled number "+RandomNumber);
}
rolldice();

// Random password generator
// function generatePassword(length){
//     const charset="abcdefghijklmnipqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     let password="";

//     for(let i=0;i<length;i++){
//         const randomIndex=Math.floor(Math.random()*charset.length);
//         password+=charset[randomIndex];
//     }
//     alert(password);
// }

// let len=prompt("Enter length");
// generatePassword(len);

// Random Color Generator
// function randomcolorgenerator(){
//     const randomhex=Math.floor(Math.random()*16777216);
//     alert(`Random Color for you is: #${randomhex}`);
// }
// randomcolorgenerator();

// Password strength checker

function passwordStrengthChecker(password) {
  let scorecard = {
    0: "Very Weak",
    1: "Weak",
    2: "Average",
    3: "Good",
    4: "Excellent",
    5: "Strong",
  };
  let score = 0;
  if (password.length >= 0) score++; //minimum length 8
  if (/[A-Z]/.test(password)) score++; //one capital letter
  if (/[a-z]/.test(password)) score++; //one smallcase
  if (/[0-9]/.test(password)) score++; //1 number
  if (/[!@#$%^&*()]/.test(password)) score++; //1 special char
  console.log("Password Strength is: " + scorecard[score]);

  //regex-> Regular Expressions
}

passwordStrengthChecker("Ayush");

//Random Quote Generator

let quotes = [
  "Happiness depends upon ourselves",
  "Happiness is when what you think, what you say, and what you do are in harmony.",
  "The moments of happiness we enjoy take us by surprise.",
  "Even if happiness forgets you a little bit, never completely forget about it.",
  "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude",
];
// function randomQotes() {
//   let randomIndex = Math.floor(Math.random() * quotes.length);
//   let quote = quotes[randomIndex];
//   alert(quote);
// }
// randomQotes();

// let quotes = [];
// function randomQuote(){
//     let randomQuote=Math.floor(Math.random()*quotes.length);
//     alert(quotes[randomQuote]);

// }
// randomQuote();

// let quotes = ["abcd","hsjfd","jbdfjknsjd","sbdjsddf"]

// function genRandomQuote(){
//     const randomABC = Math.floor(Math.random()*quotes.length);
//     const randomQuote = quotes[randomABC];
//     alert(randomQuote);
// }
// genRandomQuote();

// function rahiye(){
//     let q1=Math.floor(Math.random()*quotes.length);
//     console.log(quotes[q1]);
// }
// rahiye();

//DIGITAL CLOCK

// function digitalClock(){
//     const clockElement=document.createElement("h1");
//     function updatetime(){
//         const now= new Date();
//         console.log(now);
//         const hours=now.getHours().toString();
//         const minutes=now.getMinutes().toString();
//         const seconds=now.getSeconds().toString();
//         const timestring=`${hours} : ${minutes} : ${seconds}`;
//         clockElement.textContent=timestring;
//         document.body.appendChild(clockElement);

//     }
//     setInterval(updatetime,1000);
// }

// digitalClock();

//ARRAY

// It is a data structure that allows you to store and manipulate collections of values.

//creating array

const numbers = [1, 3, 45, 6, 2];

const fruits = ["apple", "oranges", "banana"];

const mixed = [
  1,
  "Ayush",
  true,
  {
    name: "Ayush",
    age: 10,
    placed: true,
  },
];

//accessing elements in array
console.log(numbers[2]);

//modifying element in array
numbers[0] = 111;
console.log(numbers);

//finding array length
console.log(numbers.sort((a, b) => a - b));

//Array Method and operations:
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array and returns it.
// shift(): Removes the first element from an array and returns it.
// unshift(): Adds one or more elements to the beginning of an array.
// concat(): Concatenates two or more arrays and returns a new array.
// slice(): Extracts a portion of an array into a new array.
// splice(): Changes the content of an array by adding, removing, or replacing elements.

// DOUBT 1:
// `some text ${value}, sometest`

// sir is this used mostly or the traditional one using "+"

// let firstName="Ayush";
// let lastName="Bansal"
// console.log("Hello, "+firstName+" "+lastName+". Nice to meet you.");
// console.log(`Hellol, ${firstName} ${lastName}. Nice to meet you.`);

document.addEventListener("click", () => {
  console.log("button clicked!");
});

//difference between == and ===

let a = 10;
let b = "10";
let c = 10;

if (a == b) {
  console.log(a, b);
}

if (a === b) {
  console.log(a, b);
} else console.log("else condition:", a, b);

//Array Method and operations:
const numsArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array and returns it.
// shift(): Removes the first element from an array and returns it.
// unshift(): Adds one or more elements to the beginning of an array.
// concat(): Concatenates two or more arrays and returns a new array.
// slice(): Extracts a portion of an array into a new array.
// splice(): Changes the content of an array by adding, removing, or replacing elements.

//push(): Adds one or more elements to the end of an array.

let numlist = ["1", "2", "3"];
numlist.push("4");
console.log(numlist);

let numlist1 = [1, 2, 3];
numlist1.push(4, 5, 6);
console.log(numlist1);

//pop(): Removes the last element from an array and returns it.
//  eg 1:
let colors = ["orange", "pink", "red"];
let lastcolor = colors.pop();

console.log(lastcolor);
console.log(colors);

// eg 2.

// using arrays at stack

let stack = [1, 2, 3, 4, 5];
while (stack.length > 0) {
  console.log(stack.pop());
}
console.log(stack);

//shift(): Removes the first element from an array and returns it.

let names = ["Ayush", "Yashwardhan", "utkarsh"];

let firstName = names.shift(); //ayush
console.log(firstName);
console.log(names);

function stacktop() {
  console.log(names[names.length - 1]);
}
stacktop();

// unshift(): Adds one or more elements to the beginning of an array.

let names1 = ["Ayush", "Yashwardhan", "utkarsh"];
names1.unshift("Sanket");
names1.push("shibasish");
console.log(names1);

names1.unshift("Abhishek", "Sukesh");
console.log(names1);

let names2 = ["Abhishek Kumar", "K Sukesh"];

// names1.unshift(names2);
// console.log(names1)

names1.unshift(...names2);
console.log(names1);

// ... is called a spread operator used to destructure an array.

let names3 = ["Ayush", 
              "Yashwardhan", 
              "utkarsh", 
              ["Abhishek", "Aman"]];
console.log(names3[3][1]);


// concat(): Concatenates two or more arrays and returns a new array.

// let names4=names1.concat(names2);
// console.log(names4);
// console.log(names1);


// const nums1=[1,2,3];
// const newArray=nums1.concat(4,[5,6]);
// console.log(newArray);



// slice(): Extracts a portion of an array into a new array.

let names5 = ["Ayush", "Yashwardhan", "utkarsh","sukesh","Aman","Ananya"];
const fewer_names=names5.slice(0,2);
console.log(fewer_names);



// splice(): Changes the content of an array by adding, removing, or replacing elements.
let months=["Jan","Feb","Mar","April","May","June"];
const removedMonths=months.splice(1,0,"Sept");
console.log(removedMonths);
console.log(months);
// splice(index,how many values from index to be removed, what to replace it with )


const numbers1 = [1, 2, 3, 4, 5];
const removedItems = numbers1.splice(1, 3, 10, 11, 12);

console.log(numbers1);// [1,10,11,12,5];
console.log(removedItems);//[2,3,4]


//Iterating over Arrays:

for(let i=0;i<5;i++){
  console.log(months[i]);
}


//multidimentsional arrays

let matrix=[
  [1,2,3],
  [4,[5,5],6],
  [7,8,9]
]
console.log(matrix[1][1])


let mathops=[
  function add(a,b){
    return a+b;
  },
  function prod(a,b){
    return a*b;
  }
]

console.log(mathops[0](2,4));


//Objects

// objects in js are key-value pairs used to store and organize data. They are fundamental
// ds in js and provide a flexible way to represent real world data.

// 1. Creating Object
const person={
  name:"Ayush",
  age:10,
  occupation:"developer",
  placed: true
}

console.log(person);


// 2. Displaying Object
// console.log(person.name);
// console.log(person["na me"])



// 3. Modifying object
person.age=19;
console.log(person);



// 4. Adding a key in object

person.city="delhi";
console.log(person);

// 5. removing a key

delete person.city;
console.log(person);

//6. Object methods

const calculator_with_object={
  add: function(a,b){
    return a+b;
  },
  prod: function(a,b){
    return a*b;
  },
  name:"Ayush"
}

console.log(calculator_with_object.add(3,5))
console.log(calculator_with_object.prod(3,5))



// 7. Iteration over object keys

for(let a in person){
  console.log(a +" : " + person[a]);
}

// 8. Object cloning

const clonedPerson= Object.assign({},person);
console.log(clonedPerson)


// console.log(...person);

const rectangle = {
  width: 10,
  height: 5,
  calculateArea: function() {
    return this.width * this.height;
  }
};

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Action", "Sci-Fi", "Thriller"]
};
