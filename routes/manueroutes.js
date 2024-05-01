const express=require("express")
const router=express.Router();
const manue=require("./../models/manue")
router.post("/",async(req,res)=>
{try{
    const data=req.body;
    const manuea=new manue(data)
    const ress=await manuea.save()
    console.log("manue saved")
    res.status(200).json(ress);
}
catch(error)
{
    console.error(error);
    res.status(500).json({error:"Internal error"})
}
})
router.get("/",async(req,res)=>
{
    try {
        const data=await manue.find()
        console.log("manue fetch")
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"internal error"})
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
module.exports=router;