const fs = require("fs");
const { METHODS } = require("http");



// fs.writeFileSync("Bio.txt", `: The term 'git' is not recognized as the name of a csers\MAYUR\Desktop\web devp\NODE\Thmdlet, function, script file, or
// operable program. Check the spelling of the name, or if a path was included, verify that                          mdlet, function, script file, or 
// the path is correct and try again.                        path was included, verify that    
// At line:1 char:1
// + git status
// + ~~~
//     + CategoryInfo          :`);







//     fs .appendFileSync("Bio.txt",`  + CategoryInfo          : ObjectNotFound: (git:String) [], CommandNotFoundException
//     + FullyQualifiedErrorId : CommandNotFoundException   
// `);





// METHOD 1
//  Syncronus

// const buff=fs.readFileSync("MyBio.txt","UTF8");
// console.log(buff)

// METHOD 2 
// Asyncronus

// fs.readFile('read.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.renameSync("Bio.txt","MyBio.txt")

 


fs.unlinkSync("MyBio.txt")