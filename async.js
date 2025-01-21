// console.log(10);
// console.log(20);
// console.l0g(30);
// console.log(40);
// console.log(50);
// setInterval(()=>{
//     document.writeln("MRU");
// },1500)

//promise
// let p1=new Promise((resolve, reject)=>{});
//     console.log(p1);

let p2=new Promise((resolve, reject)=>{
    resolve("Success");
});
console.log(p2);
p2.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("finally printing for both"))

// let p3=new Promise((resolve, reject)=>{
//     reject("Failures");
// });