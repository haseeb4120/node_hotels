const mongoose=require("mongoose")

const Personschema=new mongoose.Schema(
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
       
       
       
        
        
        // votes:
        //     {
        //         user:
        //         {
        //             type:ObjectId,
        //             ref:'user',
        //         },
        //         votedAt:
        //         {
        //             type:data,
        //             default:data.now()

        //         }
        //     }
        // ,
        // voteCount:
        // {
        //     type:number,
        //     default:0
        // }

        
        
    }
)
const Person=mongoose.model("Person",Personschema)
module.exports=Person;
