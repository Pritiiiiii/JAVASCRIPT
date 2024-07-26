// console.log(y);
// console.log(z);//Cannot access 'z' before initialization
// let x=20;
// var y=30;
// const z=40;
// console.log(x,y,z);
// demo();
// function demo(){
//     let x=50;
//     console.log("demo function");
//     console.log(x);
//     function f1(){
//         var x=90;
//         console.log(x);
//     }
//     f1();
// }
//!WINDOW OBJECT
console.log(window);
//window alert('alert message)
console.log(this);
console.log(this===window)

var b=70
let a=90

function f2(){
    var b=80;
    console.log(b)
    console.log(this.b)//70
    console.log(this.a)//undefined
}
f2();