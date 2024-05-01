const express=require("express")
const app=express();
// require('dotenv').config();
const bodyparse=require("body-parser")
app.use(bodyparse.json());
const PORT=process.env.port || 3000;
app.listen(PORT,()=>
{
    console.log("listeing in port 3000")
})