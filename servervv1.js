const express=require("express")
const mongoose=require("mongoose")
const person=require("./models/Person")
const manue=require("./models/manue")
const url="mongodb://localhost:27017/hotels"
mongoose.connect(url);
const db=mongoose.connection;
const app=express();
const bodyparser=require("body-parser")

app.use(bodyparser.json());

db.on('connected',()=>{
    console.log("connected")
})
app.get("/", (req, res)=>
{
    var person={
        name:"haseeb",
        regno:"4120"
    }
    res.send(person)
})
// app.post("/item",(req,res)=>
// {
//     console.log("saved")
// })
// app.post("/person", async(req, res)=>
// {
//     try
//     {

//         const data=req.body;
//         const newPerson=new person(data);
//         const response=await newPerson.save();
//         console.log("saved");
//         res.status(200).json(response);
//     }
//     catch(err)
//     {
//         console.error(err);
//         res.status(500).json({error:"internal server error"})
//     }

// })
// app.get("/person",async(req,res)=>
// {
//     try {
//         const data =await person.find()
//         console.log("data fetch")
//         res.status(200).json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error:"error internl server"})
//     }
// })
// app.post("/manue",async(req,res)=>
// {try{
//     const data=req.body;
//     const manuea=new manue(data)
//     const ress=await manuea.save()
//     console.log("manue saved")
//     res.status(200).json(ress);
// }
// catch(error)
// {
//     console.error(error);
//     res.status(500).json({error:"Internal error"})
// }
// })
// app.get("/manue",async(req,res)=>
// {
//     try {
//         const data=await manue.find()
//         console.log("manue fetch")
//         res.status(200).json(data)
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({error:"internal error"})
//     }
// })
// app.get("/manue/:nod",async(req,res)=>
// {
//     try{
//         const nod=req.params.nod;
//     if(nod=="PM"||nod=="CM"||nod=="President")
//     {
//         const ress=await manue.find({nameOfDesignation:nod});
//         res.status(200).json(ress)
//     }
//     else
//     {
//         res.status(404).json({error:"invalid designation"})
//     }}
//     catch(error)
//     {
//         console.error(error);
//         res.status(500).json({error:"Internal error"})
//     }
// })
const personRoutes=require("./routes/personroute");
const manueRoutes=require("./routes/manueroutes")
app.use("/person",personRoutes)
app.use("/manue",manueRoutes)
app.get("*",(req,res)=>{
    var pp={
        a:"marbani kro"
    }
    res.send(pp)
})
app.listen(2323,()=>
{
    console.log("port 2323 is listening")
})