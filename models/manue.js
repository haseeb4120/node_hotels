const mongoose=require("mongoose")
const manueschema=new mongoose.Schema(
    {
        nameOfDesignation:{
            type:String,
            encodeURIComponentnum:["PM","CM","President"],
            
        },
        Rank:
        {
            type:String,
            enum:['BPS','SPS']

        },
        RankNo:
        {
            type:Number,
            max:22,
            min:1
        }
    }

)
const manue=mongoose.model("manue",manueschema)
module.exports=manue;