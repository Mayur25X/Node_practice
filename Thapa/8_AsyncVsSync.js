const fs=require("fs");

// fs.readFile("read.txt","utf-8",(err,data)=>
// {
//     console.log(data);
// })

const data=fs.readFileSync('read.txt','utf-8');
console.log(data);