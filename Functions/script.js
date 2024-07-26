//! Name function
function add(){
    let a=10;
    let b=10;
    console.log(a+b)
}add();
//!ANONYMOUS FUNCTION
//we have to store in variable  so that we call the function without using its name
// let greet=function (){
//     let a=90;
//     let b=10;
//     console.log(a-b);
// }();

//!FUNCTION WITH EXPRESSION
//THE FUNCTION WHICH IS ASSIGNED AS A VALUE TO A VARIABLE THEN THE EXPRESSION IS CALLED AS FUNCTION WITH EXPRESSION
 let valu= function fun(){
    console.log("hello priti")
};
valu();

//!Arrow function
let fun1=()=>{
console.log("this is arrow function")
};
fun1();

//!NESTED FUNCTION
// IN NESTED FUNCTION WE CAN ACHIEVE LEXICAL SCOPE/SCOPE CHAIN
// function  function1(){
//     console.log("main function");
//     function function2(){
//         console.log("function2")
//         function function3(){
//             console.log("function3")
//             function function4(){
//                 console.log("function 4")
//             }
//             return function4();
//         }
//         return function3();
//     }
//     return function2();
// }function1()()();

//!IMMEDIATE INVOKE FUNCTION EXECUTION
//IIFE 
(function iife(){
    console.log("This is Immediate function")
})();

//!Higher order function
// function fun(a,b,cb){
//     let result=a+b;
//     cb(result);
// }fun(10,20,()=>{
//     console.log(a+b);
// })
//MAP
let arr=[10,20,30,40];
let res=arr.map((val,i,arr)=>{
return val+20;
});
console.log(res)
 let res2=arr.map((val,i,arr)=>{
return val>10;
 });
 console.log(res2)
//  console.log(arr[val])
console.log(arr)

//FILTER
let res3=arr.filter((val,i,arr)=>{
return val>10;
})
console.log(res3)

//REDUCE()
let res4=arr.reduce((acc,val)=>{
return acc+val;
},5)
console.log(res4)

//SPLICE
let res5=arr.splice(2);
console.log(res5)