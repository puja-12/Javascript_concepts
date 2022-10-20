// JavaScript primitive data types

let length = 16;                               // Number
let lastName = "Johnson";                      // String


let x1 = "16" + "Volvo";
//When adding a number and a string, JavaScript will treat the number as a string.
//JavaScript evaluates expressions from left to right


//JavaScript Types are Dynamic
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

//booleans
let a = 5;
let b = 5;
let c = 6;
(a == b)       // Returns true
(a == c)       // Returns false
document.getElementById("demo").innerHTML =
(a == b) + "<br>" + (a == c);



//JavaScript non-primitive data types

//JavaScript Arrays
const cars = ["Saab","Volvo","BMW"];
document.getElementById("demo").innerHTML = cars[0];


//objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";