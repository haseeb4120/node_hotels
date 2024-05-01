// var a=5;
// var b=6;
// const name ="haseeb hakt"
// console.log("answer is ",a+b," & ","name is",name,typeof name)
// var car=["aa","bb","cc","dd","ee"]
// console.log(car.length)
// car.push("ff")
// car.unshift("00")
// car.pop()
// car.splice(4,1)
// car.shift()
// car.indexOf("bb")
// var d=new Date()
// d.setDate(10)
// d.setFullYear(2024)
// d.setMonth(6)
// console.log(d)
// console.log(car)
// var arr=["aa","bb","cc","dd"]
// var a=arr.filter(abc) 

// function abc(value)
// {
//     if(value!="aa")
//     {
//     console.log(value)
//     }
//     else{
//         console.log("zero")
//     }
// }
// prompt ky liay pacakge          npm i prompt-sync//////////////////////////////////////////imp
// var prompt = require('prompt-sync')();
// var age=prompt("enter age");
// console.log(age);
function callback()
{
    console.log("call back")
}
var add =function(a, b, callback)
{
    var c=a+b;
    console.log(c)
    callback();
}
add(1,2,callback);
