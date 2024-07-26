// let x=new Object();
// x.name="xyz";
// x.id=123;
// console.log(x);
// let y={
//     id:400,
//     skills:["java","js","react"],
//     fn:function(){
//         console.log("Anonymous function");
//     },
//     nested:{
//         key:"value",
//     }
//     };
//     y.fn();
//     console.log(y.nested["key"]);
//     // console.log(y.nested.key)
//     let obj={
//         name:"priti",
//         id:6065,
//         skills:"java",
//         ismarried:false,
//         age:21,
//     };

//     //object.freeze(obj);
//     // console.log(object.isFrozen(obj))
//     Object.seal(obj);
//     console.log(Object.isSealed(obj));
//     obj.salary=10000;
//     delete obj.id;
//     obj.name="priti";
//     console.log(obj);
//     let key=Object.keys(obj);
//     console.log(key);
//     let values=Object.values(obj)
//     console.log(values)

//     let entry=Object.entries(obj)
//     console.log(entry)

// //Object Assign
// let x={
//     name:"xyz",
//     id:900,
//     skills:["java","react"],
// };
// let k={
//     key:"value",
// };
// let newObj=Object.assign(x,address,y);
// console.log(newObj);
// console.log(x);
// console.log(address);
// console.log(k);

// let o=Object.assign({},x);
// console.log(o);

// //!rest parameter and spread operator
// //!A rest parameter must be last

// function demo(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// demo(10,20,30,40,50);
// let str="javscript";
// console.log(...str);

// let ar=[90,40,30,20];
// console.log(...ar);

// let a1=[80,30];
// let a2=[70,50];
// console.log([...a1][...a2]);
// console.log([...str]);

//by using literal
let user={
    name:"priti",
    id:101,
    std:"BE",
    cgpa:9.32,
    email:"pritimolawade@gmail.com",
"full name":"priti molawade"
}
console.log(user);
console.log(user.name);
console.log(user["id"])
console.log(user["full name"]);
console.log(`HELLO JSUSER , ${user.name}`)

//!using new object constructor to create an object
let x=new Object();
x.name="pooja";
x.id=101;
x.loc="dombivali";
console.log(x.name);
//!Using a Constructor Function
//!Constructor functions allow you to create multiple objects with similar properties and methods.
function student(id,name){
    this.id=id;
    this.name=name;
}
let  s1=new student(10001,"Prisha");
let s2=new student(10002,"saash");
// FOR EACH LOOP 
//FOR EACH DO NOT RETURN ANYTHING IT JUST PERFORM SOME OPERATION
let array=[1,2,3,4,5,6,7,8,9,10];
let newarr=[];
array.forEach((val,i,array)=>{
console.log(newarr.push(val*2));
return val*2;
})
console.log(newarr);
// console.log(result)
//!MAP
let ma=[1,2,3,4,5,6,7];
let rs=ma.map((v,i,arr)=>{
return v*3;

})
console.log(rs)
console.log(ma)
