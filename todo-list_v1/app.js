const express = require("express");
const BodyParser = require("body-parser");
const https = require("https");
const app = express();


app.use(express.static("public"));

var items = ["Buy Food", "Drink Water", "Wacthing Anime"];
let Itemwork = [];

app.use(BodyParser.urlencoded({ extends: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // res.sendFile(__dirname+"/index.html");

    var today = new Date();
    // var currentDay = today.getDay();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", option);

    res.render("list", { ListTitle: day, AddList: items });


})



app.get("/work", (req, res) => {

    res.render("list", { ListTitle: "Work - Title", AddList: Itemwork })

})


app.post("/", (req, res) => {

    let item = req.body.Item;
    // console.log(req.body);

    if (req.body.list === "Work") {

        Itemwork.push(item);
        res.redirect("/work");

    }
    else {
        items.push(item);
        res.redirect("/");
    }
})


// app.post("/work", (req, res) => {
//     let item = req.body.Item;
//     work.push(item);
//     res.redirect("/");
// })

app.get("/about",(req,res)=>{
res.render("about");
})


app.listen(3000, () => console.log("server is running at server 3000"));