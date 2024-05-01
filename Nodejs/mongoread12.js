const dbconnect=require("./mongo12")

const main=async()=>
{
    let data= await dbconnect();
    data=await data.find({"name":"haseeb"}).toarray()
    console.warn(data)
}
main()
.then(console.log)
.catch(console.error)
