const express=require("express");
const app=express();
const path=require("path");


const staticPath=path.join(__dirname+"/public")
app.set("view engine","hbs");

app.use(express.static(staticPath));



app.get("/hbs",(req,res)=>{
    res.render("index");
})

app.listen(2000,()=>{
    console.log("connected");
})