//convert JS object to JSON File

const fs=require("fs");

const bioData={
    name:"Mayur",
    age:89,
    channel:"Hell"
}

const JsonData=JSON.stringify(bioData);



///JSON file to js Object file
const objFormat=JSON.parse(JsonData);

////USING FILE TO CONVERT JSON FILE TO OBJECT FILE

fs.writeFile("JSONFile.json",JsonData,(err)=>{
    console.log("done");
})
 
fs.readFile("JSONFile.json",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
})