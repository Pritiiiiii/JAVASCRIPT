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
// alert("ALERT POPUP");

//! 4. confirm();
// let res= confirm("are you sure? you want to continue");
// console.log(res);

//! 5. prompt();
// let age= promt("enter your age");
// console.log(age)
// console.log(typeof age)

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



