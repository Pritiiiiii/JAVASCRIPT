//! tokens
let $= 200;
var _=800;
console.log($);
console.log(_);
// those same 4 rules while declaring a variable

//^ inbuilt method in js
//! 1. console.log
console.log("hello"); // to print in the console
 
//! 2. document.write
document.write("web technology"); // to print in webpage
document.write("web technology" + "<br/>"); //to give linebreak
document.writeln("React Js"); // to give space
document.write("JavaScript");

//! 3. ALLERT
// let res1=alert("ALERT POPUP");
// console.log(res)
//! 4. confirm();
// let res= confirm("are you sure? you want to continue");
// console.log(res);

//! 5. prompt();
//The prompt function is useful for simple user interactions, such as getting input directly from the user in a web page
let age= prompt("enter your age");//
console.log(age)
console.log(typeof age)

//* typecasting
//! implicit typecasting
let x= "10";
let y= 20;
let z= x+y;// number is converted into string datatype
console.log(z);
//string datatype is converted into number
console.log(100 -"30");
console.log(true + false)

//! explicit typecasting
let a = 200.23673;
let b= "str";
let num= parseInt(a);// only converts into int 
console.log(num)
console.log(typeof num)

console.log(parseInt(b))
console.log(parseFloat(a))// converts into  float 
// implicit Typecasting:

// JavaScript automatically converts data types when necessary. This is called implicit typecasting or type coercion.
// let z = x + y; results in "1020" because JavaScript converts the number 20 to a string and concatenates it with "10".
// console.log(100 - "30"); results in 70 because JavaScript converts the string "30" to a number and performs subtraction.
// console.log(true + false); results in 1 because true is implicitly converted to 1 and false to 0.
// Explicit Typecasting:

// JavaScript provides functions to manually convert data types, known as explicit typecasting.
// parseInt(a) converts the floating-point number 200.23673 to the integer 200, discarding the decimal part.
// parseInt(b) attempts to convert the string "str" to an integer, which is not possible, resulting in NaN.
// parseFloat(a) converts the number 200.23673 to a floating-point number, which remains 200.23673.



