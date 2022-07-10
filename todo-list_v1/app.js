const express = require("express");
const BodyParser = require("body-parser");
const https = require("https");


const app = express();

app.use(BodyParser.urlencoded({ extends: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // res.sendFile(__dirname+"/index.html");

    var today = new Date();
    // var currentDay = today.getDay();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",option);
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Firday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         console.log("Error : current day is equal to : " + currentDay)
            
    // }
    res.render("list", { kindOfday: day });

})

app.post("/",(req,res)=>{
    var item=req.body.Item;
    console.log(item);
})

app.listen(3000, () => console.log("server is running at server 3000"));