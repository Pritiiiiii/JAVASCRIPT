//!Higher order function
function fun(a,b,cb){
    let result=a+b;
    cb(result);
}fun(10,20,(val)=>{
    console.log(val)
});
function add(a,b,cb){
    res=a+b;
    cb(res);
}
add(100,90,(val)=>
console.log(val)
)
//find
let arr=[1,2,3,4,5];
let ans=arr.findIndex((v,i,a)=>
v===5)
console.log(ans)

//filter
let ans2=arr.filter((val,i,arr)=>
val%2==0);
console.log(ans2)

//map
let ans3=arr.map((val,i,arr)=>
 val*2);
console.log(ans3);
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
let ma=[100,20,300,10,50];
let rs=ma.map((v,i,arr)=>{
return v*3;

})
console.log(rs)
console.log(ma)

//for each method
let ans4=arr.map((v,i,arr)=>{
 return  v*3
}
);
console.log(ans4)

let ans5=arr.forEach((v,i,a)=>{
    return v*4;
}
);
console.log(ans5)

//reduce and reduce right
// let ma=[10,20,30,40,50];
let ans6=ma.reduce((acc,curr,i,arr)=>{
   return acc+curr;
},5)
console.log(ans6)

//reduce right
let ans7=ma.reduceRight((acc,cur,i,arr)=>{
    return acc+cur;
},5)
console.log(ans7);

//sort 
let ans8=ma.sort((a,b)=>{
    return a-b;
});
console.log(ans8);

let alpha=["a","b","z","r","y","s"];
let ans9=alpha.sort((a,b)=>{
    return a.localeCompare(b) ;
})
console.log(ans9)

//some
let ans13=ma.some((v,i,a)=>{
    return v>10;
})
console.log(ans13)

//every
let ans14=ma.every((v,i,ar)=>{
    return v>10;
})
console.log(ans14)

//filter
let ans15=ma.filter((v,i,a)=>{
    return v>50;
})
console.log(ans15)

//find
let ans16=ma.find((v,i,a)=>{
return v%2==0;
})
console.log(ans16)
//findindex
let ans17=ma.findIndex((v,i,a)=>{
return v>10;
})
console.log(ans17);
//if you want to reverse the array first we have to sort the array using sort method 
let ans10=ans9.reverse();
console.log(ans10)

let ans11=ans8.reverse();
console.log(ans11)
console.log(ma)//modifies the original array

//includes
let ans12=ma.includes(10);
console.log(ans12)

//flat it will create new array by combining subarray it will convert multi dimensional array into id array it take one attrtibute as depth in which we pass the value that 4d array so (4-1=3)=3 pass it will not take call back function as argument

let nested=[1,2,3,[5,6],[7,8,9,10],[8,9,0,9,90]];
let ans18=nested.flat(3);
console.log(ans18)

//fill
// The fill method replaces all elements in the specified range with the provided value.
// If no range is specified, it fills the entire array.

let newa=[10,20,50,40,23];
// let ans20=newa.fill(10);
// console.log(ans20)

let ans21=newa.fill(1,1,3);
console.log(ans21)



