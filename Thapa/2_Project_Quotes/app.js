const fs=require("fs");
const http=require("http");

const homeFile=fs.readFileSync(__dirname+"\\index.html","utf-8")
const server=http.createServer((req,res)=>{
    if (req.url="/") {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(homeFile);
        res.end();
    }
    else if(req.url=="/")
    {
        console.log(__dirname+"/style.css");
        fs.readFile(__dirname+"\\style.css",(err,data)=>{
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(data);
            res.end();
        })
    }
})
server.listen(8450,()=>{
    console.log("serverRunning")
})





// http.createServer(function (req, res) {
//     if (req.url === "/") {
//         console.log(__dirname+"/index.html");
//         fs.readFile(__dirname+'/index.html', function (err, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.end();
//         });
//     }
//     else if (req.url === '/style.css') {
//         fs.readFile('style.css', function (err, data) {
//             res.writeHead(200, { "Content-Type": "text/css" });
//             res.write(data);
//             res.end();
//         });
//     }

// }).listen(8080); 