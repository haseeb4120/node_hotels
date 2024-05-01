// console.log("server")
// function add()
// {
//     console.log("hello")
// }
// var a=function abc(aa,bb,add)
// {
// return aa+bb;
// add();
// }
// a(1,2,add())
// console.log(a)
// const notes=require("./notes.js")
// const fs=require("fs")
// const os=require("os")
// var s=fs.appendFileSync("h.txt","haseeeebbbbbbbbb",()=>
// {
//     console.log("file is crested in pst")
// })
// var e=fs.readFileSync("h.txt","utf-8",()=>
// {
//     console.log(s)
// })
// console.log(notes.age);
// console.log(notes.addnumber(notes.age,18))

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get("/beef",function(req,res)
// {
//     res.send("beef is present")
// })



// app.listen(3000)
// const notes=require("./notes.js")
// console.log(notes.addnumber(3,4))
const arr=[11,22,33,55]
// arr.filter((a)=>
// {
//   console.log(a)
// })
let f=arr.filter((a)=>
{
 return a==1
})
console.log(f)