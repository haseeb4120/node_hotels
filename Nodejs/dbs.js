const express=require("express");
const app=express();
const db=require("./db");
const person=require("./models/person");
const bodyparse=require("body-parser");
app.use(bodyparse.json());
// app.get("/",(req,res)=>
// {
//     console.log("welcome to my hotel")
// });
app.post("/person",async (req,res)=>
{
    try{
   const data=req.body
   const newp=new person(data);
   const rep=await newp.save();
   res.status(200).json(rep);
    }catch(error)
    {
        console.log("error")
    }

})
app.listen(3331)