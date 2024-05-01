const express=require("express")
const app=express();
app.get("/about",(req,res)=>
{
    res.send("name is : "+req.query.name+"<br>value is : "+req.query.value);
    
});
app.listen(2345);