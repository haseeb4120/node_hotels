const express=require("express")
const router=express.Router();
const voter=require("./model/voter.js")
router.post("/signup",async(req,res)=>
{
    try{
        const data=req.body
        const newVoter=new voter(data)
        const respomse=await newVoter.save()

        const payload=
        {
            id:response.id
        }
        console.log(JSON.stringify(payload))
        res.status(200).json({response:response})
    }catch(err)
{
    console.log(err)
    res.status(500).json({error:"internal error"})
}
})

router.post("/login",async(req,res)=>
{
try {
    
    const {CNIC,password}=req.body
    const user=await 
} catch (error) {
    
}
})