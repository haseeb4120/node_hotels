const express=require("express")
const router=express.Router();
const person=require("./../models/Person")
router.post("/", async(req, res)=>
{
    try
    {

        const data=req.body;
        const newPerson=new person(data);
        const response=await newPerson.save();
        console.log("saved");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.error(err);
        res.status(500).json({error:"internal server error"})
    }

})
router.get("/",async(req,res)=>
{
    try {
        const data =await person.find()
        console.log("data fetch")
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"error internl server"})
    }
})

router.get("/:nod",async(req,res)=>
{
    try{
        const nod=req.params.nod;
    if(nod=="PM"||nod=="CM"||nod=="President")
    {
        const ress=await manue.find({nameOfDesignation:nod});
        res.status(200).json(ress)
    }
    else
    {
        res.status(404).json({error:"invalid designation"})
    }}
    catch(error)
    {
        console.error(error);
        res.status(500).json({error:"Internal error"})
    }
})
router.put("/:id", async(req, res)=>
{
    try {
        const personid=req.params.id;
        const updatedid=req.body;
        const response=await person.findByIdAndUpdate(personid, updatedid, {
            new:true, 
            runValidator:true, 

        })
        if(!response)
        {
            res.status(404).json({error:"person not found"})
        }
        console.log("data updated")
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"})
        
    }
})
router.delete("/:id", async(req, res)=>
{
    try{
    const personid=req.params.id;
    const response=await person.findByIdAndDelete(personid);
    if(!response)
    {
        res.status(404).json({error:"person is not found"})
    }
    console.log("delete  sucessfully")
    res.status(200).json({message:"person deletedsucessfully"})
}
catch(err)
{
    console.log(err);
    res.status(500).json({err:"internl error"})
}
})

module.exports=router;