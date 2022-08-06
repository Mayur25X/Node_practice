const express=require("express");
const bodyParser=require("body-parser");
const { application } = require("express");


const app=express();

app.get("/home",(req,res)=>{
    res.json([{
        name:"Mayur",
        age:20,
        address:"Nagpur",
        college:"Wce,sangli"
    }])
})

app.get("/home2",(req,res)=>{
    res.send([
        {
            name:"Mayur",
            age:20,
            address:"Nagpur",
            college:"Wce,sangli"
        },
        {
            name:"Mayur",
            age:20,
            address:"Nagpur",
            college:"Wce,sangli"
        }
    ])
})

app.listen(8000,()=>{
    console.log("Connected");
})