const http=require("http")
const data=require("./API5a.js")
http.createServer((req,res)=>
{
    res.writeHead({"Content-Type":"App/JSON"});
    res.write(JSON.stringify(data));
    res.end()
}).listen(3000)