const express=require("express");
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({extende:true}))


app.get("/bmiCalculator",(req,res)=>res.sendFile(__dirname+"/bmiCalculator.html"));

app.post("/bmiCalculator",(req,res)=>{
   var weight=parseFloat(req.body.val_1);
   var height=parseFloat(req.body.val_2);

   var bmi=weight/(height*height);

   res.send("Your BMI is "+bmi);
})

app.listen(5000,()=>console.log("BMI calculator server is Online"));