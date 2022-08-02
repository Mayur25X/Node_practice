const fs=require("fs");


// fs.writeFile("bio.txt","I am Mayur Uikey ,Ty Cse UnderGraduate Students",(err)=>{
//     console.log("File Created.....!");
// })

// fs.appendFile("bio.txt","    Hello Everyone",(err)=>{
//     console.log("File data appended succesfully ");
// })


// fs.readFile("bio.txt","utf-8",(err,data)=>
// {
//     console.log(data);
// })

// fs.rename("bio.txt","MyBio.txt",(err)=>{
//     console.log("Succesufully");
// })

fs.unlink("MyBio.txt",(err)=>
{
    console.log("Done!!!!");
})