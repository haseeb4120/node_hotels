const fs=require("fs")
let text=fs.readFileSync("ahmed.txt","utf-8",(err,data)=>
{
    console.log(err,data)
})
console.log(text)