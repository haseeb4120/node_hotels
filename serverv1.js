const fs=require("fs")
const _=require("lodash")
const express=require("express")
const path=require("path")
const dirp=path.join(__dirname)
const person=require("./person.js")
const notev1=require("./notev1.js")
const dbv1=require("./dbv1.js")
const bdp=require("body-parser")
const app=express();
app.use(bdp.json());//store data in req.body
const port="3000"

app.use(express.static(dirp))

app.get("/",(req,res)=>
{
    res.send("hello world")
})
app.get("/chicken",(req,res)=>
{
    res.send("i like to serve chicken")
})
app.get("*",(req,res)=>
{
    res.sendFile(`${dirp}/nopage.html`)
})
app.post("/",(req,res)=>
{
    const newPerson=new person(data)
    console.log("saved")
})
app.listen(port,()=>
{
    console.log("port is 3000")
})

// function cb(){
// console.log("server is loaded");
// }
// var a=function add(a) {
//     return a;
    
// }
// var add=(a,b,cb)=>
// {
//     console.log(a+b);
//     cb();
// }
// console.log(add(1,2,()=>
// {
//     console.log("completed")
// }))
// fs.appendFile("khan.txt","hhhhaaaaaahhahahahah",()=>
// {
    // var n=notev1.name;
    // console.log(n);
    // console.log("update")
    // let x=a=1;
    // let y=b=3;
    // var r=notev1.add(x,y)
    // console.log(r)
    // var a=[a,a,11,23,23,"haseeb","ahmed"]
    // var rr=_.uniq(a)
    // console.log(rr)
//     const jsonstring={name:"haseeb",age:18}
//     const d=JSON.stringify(jsonstring)
//     console.log(d)
// })


