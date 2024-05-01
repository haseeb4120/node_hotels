const express=require("express");
const path=require("path");
const app=express();
const dirp=path.join(__dirname,"public")
console.log(dirp);
app.use(express.static(dirp));
app.get("/about",(req,res)=>
{
    res.sendFile(`${dirp}/about.html`)
})
app.get(" ",(req,res)=>
{
    res.sendFile(`${dirp}/index.html`)
})
app.get("*",(req,res)=>
{
    res.sendFile(`${dirp}/nopage.html`)
});
app.listen(2122);