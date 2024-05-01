const express=require("express");
const app=express();
app.get("/about",(req,res)=>
{
 res.send("home page")
});
app.listen(44144)