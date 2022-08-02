const fs = require("fs");


fs.appendFile("read.txt","harry lecture in next 10 min",(err)=>
{
    console.log("completed");
});


fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data);
})