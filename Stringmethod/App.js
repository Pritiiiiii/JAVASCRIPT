let str="Javascript";
console.log(str.length);
console.log(str[0]);

// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// for(let i of str){
//     console.log(i)
// }

// for(let i in str){
//     console.log(i)
// }

//!SLICE
let r1=str.slice(0,4);
console.log(str)
console.log(r1)

//!substring
let r2=str.substring(5);
console.log(str);
console.log(r2);

//!Substr
let r3=str.substr(5,2);
console.log(r3);

//!replace
let st="This is Javascript and you can learn Javascript";
let r4=st.replace("Javascript","reactJs");
console.log(r4);

//!REPLACE ALL
let r5=st.replaceAll("Javascript","reactJs");
console.log(r5);

//!REVERSE  STRING
let str1="javscript";
let r=str1.split("");
console.log(r)
let rev=r.reverse();
console.log(rev)
let res=rev.join("");
console.log(res);

// let res1=str.split("").reduceRight((acc,cv)=>acc+cv,"");
// console.log(res1);
let str2="priti Molawade";
let ans=str2.split("").reduceRight((acc,cur)=>acc+ cur,"");//initially accumulator value is empty string it takes the value from right and start concatenate
console.log(ans)

let r6=str.charAt(3)
console.log(r6);
let r7=str.charCodeAt(3);
console.log(r7);

console.log(str.includes("i"));
console.log(str.includes("a",2))
