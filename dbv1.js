const mongoose=require("mongoose")
const url="mongodb://localhost:27017/hotel"
 mongoose.connect(url)
 const database=mongoose.Connection;
// console.log("server is connected")
// db.on("connected"),()=>
// {
//     console.log("Connected")
// }
//  db.on("error",()=>
//  {
//     console.log("error")
//  })
//  db.on("disconnected",()=>
//  {
//     console.log("disconnected")
//  })
