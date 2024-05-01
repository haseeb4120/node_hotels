const mongoose=require("mongoose")
const perschema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        age:
        {
            type:Number,
            required:true
        },
        work:
        {
            type:String,
            enum:["chef","manager","waiter"],
            required:true

        },
        email:
        {
            type:String,
            required:true,
            unique:true
        }
    }
)
const person=mongoose.model("person",perschema)
module.exports=person;