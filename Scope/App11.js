"use strict";
//!  local scope

let x= 10;
var y= 20;
const z= 30;
console.log(x)
console.log(y)
console.log(z)

function demo(x,y){
    let a= 10;
    var b= 20;
    const c= 30;
    console.log(a,b,c);
    return c -b;
}
demo(100, 200);

{
    let p= "str";
    const q= "js"
    var r= "java"
    console.log(p)
}

console.log(r)
// consol.log(q) //! block scope

//? example for use strict
//m = "python"
// consol.log(m)

function f1(a,b,b){
console.log(a+b+b)
}
// duplicate values are not allowed while use strict

function f2(){
    console.log("named function")
}
f2();
let f2= function(a,b){
    let x= 10;
    let y= 20;
    console.log(x,y)
    return 10;
}

let res = f2();
console.log(res)

//! arrow function     important
let ar= (a,b) => {
    console.log("arrow function")
}
ar();

let arr1= () =>console.log("arr 2")
arr1();

let arr2= a =>a;
console.log(arr2(100));

