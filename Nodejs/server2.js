const http=require("http")
http.createServer((req,res)=>
{


    res.write("haseeb")
    res.end()
}).listen(4500);