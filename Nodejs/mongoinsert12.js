const dbconnect=require("./mongo12")
const insert=async()=>
{
    const db=await dbconnect();
    const result=await db.insert({"name":"eeerr"})
    console.log(result)
}
insert();