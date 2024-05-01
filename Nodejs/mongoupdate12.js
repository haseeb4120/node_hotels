const dbconnect=require("./mongo12")
const update=async()=>
{
    let data=await dbconnect();
    let result=await data.updateOne(
        {"name":"haseeb"},{"name":"king"}
    )
}
update();