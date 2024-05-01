const express=require("express")
const app=express();
app.get("/about",(req,res)=>
{
   
    res.send("<h1>hello</h1>"+req.query.name)
});
app.listen(4444)
