const express=require("express")
const dbconnect=require("./mongo12")
const app=express();
app.use(express.json());
// app.get("/",async(req,res)=>
// {
//     let data=await dbconnect();
//     data=await data.find({}).toArray();
//     console.log(data)
//     res.send("hello")
// })
app.post("/",(req,res)=>
{
   console.log(req.body)
    res.send({name:"king"})
})
app.listen(1111)