const fs= require("fs")
const path=require("path")
const dirpath=path.join(__dirname,"crud")
// for (let index = 0; index <5; index++) {
//     fs.writeFileSync("abc"+index+".txt","dil")
//     fs.unlinkSync("abc"+index+".txt","dil")
    

fs.readdir(dirpath,(err,files)=>
{
files.forEach((item)=>
{
console.log(item)
})

})