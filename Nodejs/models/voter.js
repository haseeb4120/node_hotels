const mongoose=require("mongoose")
const voterschema=new mongoose.Schema(
    {
        CNIC:
        {
            type:String,
            required:true,
            min:13,
            max:13,
            unique:true
        },
        fathername:
        {
            type:String,
            required:true
        },
        mothername:{
            type:String,
            required:true
        },
        mobilenumber:
        {
            type:number,
            min:11,
            max:11
            
        },
        password:
        {
            type:number,
            required:true
        },
        role:
        {
            type:String,
            enum:["voter","admin"],
            default:'voter'
        },
        isvoted:
        {
            type:Boolean,
            default:false
        }
        
        
    }
)
const voter=mongoose.model("voter",voterschema)
module.exports=voter;
