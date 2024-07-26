let fn=(a,b,c)=>{
    console.log(a,b,c);
    console.log("setTimeout Function");
};
let st1=window.setTimeout(fn,4000,100,"str",true);
console.log(st1);
let isUserLoggedIn=true;
if(isUserLoggedIn==false){
    clearTimeout(st1);
}

console.log("hello");
let b=400;
console.log(b+100);

// let st2=window.setInterval(function(){
//     // console.log("setInterval Function");
//     document.write("setInterval"+"<br/>")

// },200);
console.log(st2);

setTimeout(()=>{
    clearInterval(st2)
},10000);

let obj={
    fn:()=>{
        console.log("arrow function");
    },
    named:function demo(){
console.log("Demo function")
    },
    nf:function(){
        console.log("anonymous function")
    },
    f1(){
        console.log("direct function")
    }
}
obj["fn"];
obj.fn();
obj.named();
obj.f1();

//!use strict
//Strict mode is declared by adding "use strict"; to the beginning of a script or a function.

// Declared at the beginning of a script, it has global scope

//!this keyword inside global scope refers to window object
console.log(this);

//!inside local scope
function demo(){
    console.log(this);
}
demo();

class Employee{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}
let e1=new Employee("sachin",23);

let obj1={
name:"xyz",
demo:function(){
    console.log(this.name);
},
ar:()=>{
console.log(this);
}
};
obj.demo();
obj.ar();


 let d1=function(){
    console.log(this);
    let arr=()=>{
        console.log(this);
    }
 };
 arr();
d1();


