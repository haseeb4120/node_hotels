const alert =require("alert");
console.log("Fs.js is loaded")

const fs=require("fs")
fs.writeFileSync("fs1.txt","hhhhhhhhhhhh")
var text=fs.readFileSync("fs1.txt","utf-8")
console.log(text)
console.log(__dirname)
console.log(__filename)
// alert("hello");

