console.log(10==10)//ONLY DATA COMPARE
console.log(10!=0)

console.log(200=="200")//STRING CONVERTED INTO NUMBER
console.log(200==="2000")//=== compare both datatype and data

// console.log(20>30);
// console.log(20>10);

// console.log(29>=20);

// let sum=10;
// sum =sum+30;
// sum +=30;
// sum -=5;
// sum *=5;
// sum /=2;
// console.log(sum)

//! Array in js we can use homogenous and heterogenous data
// const arr=[10,20,true,() =>10,["str","js"]];
// console.log(arr);
// console.log(arr.length);

// //homogenous array
// let fruits=["apple","banana","orange","mango"];
let a=[10,"js",true,()=>"arr",[10,20,30],undefined,null,10];
// console.log(a.length);
// a[9]="react";
// a[15]="node";
console.log(a[4]);
console.log(typeof(a[3]))
// console.log(a[3]());
// a[2]=false;
// delete a[7];
// console.log(a)
console.log(a);


//! ARRAY IS DECLARE USING Literal way 
// let x=[10,20,30,40,50];
// console.log(x)

// //!USING ARRAY CONSTRUCTOR
// IF WE PASS ONLY ONE ARGUMENT  AS NUMBER IT CREATE ARRAY LENGTH SAME AS THAT NUMBER
let arr1=new Array(10);
console.log(arr1.length)//10

let arr2=new Array(10,20,30);
console.log(arr2.length);//3
let arr4=new Array(10);
console.log(arr4.length);//10

// !Array.of();
let arr3=Array.of("str",true,1n,undefined);
console.log(arr3);

let c=new Array(5,10);
console.log(c);

let v=Array. of(10);
console.log(v.length);//1
