const http=require("http");

const server=http.createServer((req,res)=>{
 if(req.url=="/")
 {
    res.end("Home page");
 }
 else if(req.url=="/about")
 {
    res.end("Hello from the About us sides");
 }
 else if(req.url=="/contact")
 {
    res.end("Hello from the contactUS sides");
 }
 else
 {
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("404 error pages .Page doesn't exist");
 }
})

server.listen(2000,()=>{
    console.log("Success")
})