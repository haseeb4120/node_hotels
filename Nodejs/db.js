const color=require("colors")
const mongoose=require("mongoose");
const mongourl="mongodb://localhost:27017/hotel";
mongoose.connect(mongourl)
const db=mongoose.connection;
db.on("connected",()=>
{
    console.log("connected".green)
})
db.on("disconnected",()=>
{
    console.log("disconnected".red)
})
db.on("error",()=>
{
    console.log("error".bgRed)
})
module.exports=db;