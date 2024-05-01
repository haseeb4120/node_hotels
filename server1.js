const http=require("http")
const fs=require("fs")
let text=fs.readFileSync("haseeb.txt","utf-8")

const server=http.createServer((req,res)=>
{
    res.headersSent("content-type","text/html")
    res.end(fs)
})
server.listen(80,"127.0.0.1",()=>
{console.log("port 80")})