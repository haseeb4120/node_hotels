const dbconnect=require("./mongo12")
const main=async()=>
{
    let data=await dbconnect();
    let result=await data.delete()

}
main();