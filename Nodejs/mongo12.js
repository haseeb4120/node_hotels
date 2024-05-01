const color=require("colors")
const {MongoClient}=require("mongodb");
const url='mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname='e-commerce';
async function dbconnect()
{
    await client.connect();
    const db=client.db(dbname)
    const collection=db.collection('product')
    console.log("connection created".green)
}
module.exports=dbconnect;