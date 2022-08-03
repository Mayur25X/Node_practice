const http=require("http");

const server=http.createServer((req,res)=>{
    res.end(("The server is open "));

});

server.listen(8000,()=>{
    console.log("welcome to the port");
})