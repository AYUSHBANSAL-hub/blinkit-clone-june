// (done) Show how to use the console.log() function to display output in the browser's console.
// (done) variables and data types
// (done) Different ways to output data in console.
// (done) Arithmetic Operations
// Conditional statements
// (done) hoisting
// (done) scope
// functions
//(done) difference btw var let const
//(done) How to take user input ->prompt or using readline functions
//(done) parseInt()-> to convert string to number
// (done) TDZ 
console.log("script file started!")


// Outputting text into the console.

// 1. Concatenating Strings
let firstname="Ayush";
let lastname="Bansal";

console.log("Full Name: "+ firstname+" "+lastname);

//2. Template literals

let city="New York";
let population=13.5;

console.log(`The population of ${city} is ${population} millions.`)

// 3. Mathematical Calculation

let radius=5;
// let area;

// function findarea(){
//    return area=10;
// }

console.log("Area of circle is:");
console.log(city,population,radius);


// 4. Boolean Expresssions

let a=10;
let b=5;

// if(a>b){
//     System.out.println("true");
// }else System.out.println("false");

console.log(a>b);
console.log(a==b);


// 5. Array display

let fruits=["Apple","banana","Orange"];

console.log(fruits);


//Variables and Data Types

// 1. String

let firstnamee="Ayush";


// 2. Number

// let age=10;

// 3. Boolean

let graduated=true;

// 4. Null

let address=null;

//null value simply indicates the absence of a value. It is commonly used 
//to represent intentionally empty or non-existent value


// if(address!=null){
//     console.log("address present is"+ address);
// }else{
//     console.log("No address present");
// }


//5. undefined

let phoneNumber;

console.log(phoneNumber);


// 6. Object


const employeeData={
    name:"Ayush Bansal",
    role:"SDE",
    Age: 10,
    onleave: false
}
console.log(employeeData.Age)

// 7. Array

let fruits1=["Apple",6,"Orange",true];

console.log(fruits1);

// 8. Date
// let currentDate= new Date();
// console.log(currentDate)

// 9. Symbol
// let id= Symbol("uniqueID");

// 10. BigInt

// let largeNumber=34983494593329329329889893893894389n;

// strings, numbers, booleans, null, undefined, 
// objects, arrays, dates, symbols, and BigInts.

// Next 30 minutes we will be discussing Arithmetic Operation

// 1. Addition

let sum=5+2;

console.log("Addition:",sum);


// 2. Subtraction


let A=10-2;
console.log("difference: ",A);


// 3. Multiplication

let prod=5*10;

console.log("product:",prod);

// 4. Division
let B=15/4;

console.log("floor",Math.floor(B),Math.ceil(B),B);

//5. Modulo( Remainder)

let remaindervalue=10%3;

console.log(remaindervalue)

// 6. Increment

let mynum1=5;
mynum1++;

console.log(mynum1)

//7. Decrement

let mynum2=5;
mynum2--;

console.log(mynum2);


// 8. Exponentiations:

let squarevalue=4**3;

console.log(squarevalue);

// 9. Unary Plus

let num_unary=+"20"; 
// sum+=10;
console.log("Num unary",num_unary);
// Nan->not a number


// 10. unary negation;

let negationval= -10;

negationval=-negationval;

console.log(negationval);


// Addition subtraction division multiplication modulo
// increment, Decrement, exponentiation, unary plus and unary negation


console.log(Math.pow(10,2))

//difference btw var let const

//         Scope        Hoisting       Reassignment
// var    functional    Hoisted            yes
// let     block        not hoisted        yes
// const   block        not hoisted     not allowed



//scope!!!

// scope refers to the visibility and accessibility of variables/functions/objects
// 1. Global scope
// Variables declared outside of any function or block have globale scope.
// They are accessible from anywhere in the code, including inside of functions and blocks.
// 2. Functional scope
    // variable declared inside of a function have function scope.
// 3. Block scope
  // introduced in ES6 with let and const declarations. block scope allows variables to scoped
  //to indivisual blocks such as loops and if else statements. block scoped variables
  // are only accessible inside the block
// let z=10; //global scope
//   function outer(){
//     const x=10;// functional scope

//     if(true){
//         const y=20; //block scope
//         console.log("outer",x+y+z); //output: 30
//     }

//     console.log("functionalscope",x);//no error data will be displayed Output: 10
//     console.log(y); //ERROR: y is not defined
//   }

// outer();

//Hoisting
//  it is a behaviour in js where variables and function declarations are moved to the top
//of their containing scope during the compilation.
//This means that regardless of where variables and functions are declared in the code
// they are accessible and can be used before their actual declaration
// code written by me:
// console.log(ayushname);
// var ayushname=10;
// console.log(ayushname);

//compiled code:
// var ayushname;
// console.log(ayushname);
// ayushname=10;
// console.log(ayushname);

// 1. Var Example:
// function varExample(){
//     if(true){
//         var x=10;
//         x=20;
//     }
//     console.log(x);
// }
// varExample();



// 2. Let Example:

// function letExample(){
//     if(true){
//         let y=20;
//     }
//     console.log(y);
// }
// letExample();


// 3. const Example:


// function constExample(){
//     if(true){
//         const y=20;
//         y=30;// Error: assignment to constant variable
//     }
//     console.log(y); //Error: y is not definerd
// }
// constExample();


// use of parsetInt()

let num1="5";
let num2="10.5";
let num3=15;


// console.log(typeof num1,typeof num2, num3+num2,typeof num3);
let sum1=parseInt(num1)+parseInt(num2);
console.log(parseInt(num1)+parseFloat(num2));

// Taking Input from the user

// 1. Using prompt
// const string= prompt("Enter a char");
// alert("thanks for the input");
// console.log(string.charCodeAt(0));


// 2. Using readine functions



//TDZ-> Temporal Dead Zone
// console.log(aaa); //Output: Reference Error: aaa is not defined
// let aaa=10;
// TDZ is a behavious in js that occurs when variables declared with let or const are
// accessed before they are declared.
//This will result in reference error.



//Conditionals

// 1. if statement

// let x=10;
// if(x>10){
//     console.log("x is greater than 10");
// }



// 2. if Else
let age=18;

if(age>=18){
    console.log("you are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

// 3.If else if else statement
let score=90;

if(score>=90){
    console.log("excellent");
}else if(score>80){
    console.log("good");
}else console.log("Average");



// 4. Ternary Operator

let isRaining=true;


let weather= isRaining? "Take an umbrella":"Enjoy the sunshine";

if(isRaining){
    weather="Take an umbrella";
}else weather="Enjoy the sunshine";


// 5. Switch statement

let day=3;
let dayname;

switch(day){
    case 1:
        dayname="Monday";
        break;
    
    case 2:
        dayname="tuesday";
        break;
    case 3:
        dayname="wednesday";
        break;
    default:
        dayname="Unknown"
}

console.log(dayname)