const fs=require("fs")
const color=require("colors")
const data=require("./p1.js")
const express=require("express")
const app=express()
app.get("/home page", (req,res=>
    {
        res.send("haseeb")

    }));
    app.listen(3434)
// const http=require("http")
// http.createServer((req,res)=>
// {
//     res.setHeader({"content-type":"app/text"})
//     res.write("haseeb");
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(4444)
// const chalk=require("chalk")
fs.writeFileSync("abc.txt","new file is created")
console.log("file is created".red)
var aa=fs.readFileSync("abc.txt","utf-8")
console.log(aa.bgBlue)
fs.appendFileSync("abc.txt","i am bs in software")
console.log("file updated".bgGreen)
fs.unlinkSync("abc.txt")

// console.log(chalk.red("file is created"))


