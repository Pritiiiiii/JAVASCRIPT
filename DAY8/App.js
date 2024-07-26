let a=()=>{
    console.log(a);
};
console.log(typeof a);
let ar=[10,20,30];
console.log(typeof ar);
let num=10;
let x=Array.isArray(ar);
console.log(x);

//! non-static methods
//PUSH()
//UNSHIFT()
//POP()
//SHIFT()
//CONCAT

//!PUSH() AND UNSHIFT()
let arr=[10,"js",true,100n,[90]]
console.log(arr.length);
//let res1=arr.push(30,70,80)

let res2 =arr.unshift("str","js");
console.log(res2)
console.log()



