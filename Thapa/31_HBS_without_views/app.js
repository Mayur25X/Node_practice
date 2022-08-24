const express=require("express");
const app=express();
const path=require("path");


const staticPath=path.join(__dirname+"/public");
app.use(express.static(staticPath));

/// set Path for Template File
const templatesPath=path.join(__dirname+"/templates");
console.log(templatesPath);


//set Views as tmplate File
app.set("views",templatesPath);
app.set("view engine","hbs");





app.get("/hbs",(req,res)=>{
    res.render("index");
})

app.listen(2000,()=>{
    console.log("connected");
})



// 1) Medicin dealership
// --passWord
// --stock curd
// ---list of company
// ---sales


// // 2)Kmap

// 2)