const express = require("express");
const BodyParser = require("body-parser");
const https = require("https");
const app = express();
const date = require(__dirname + "/date.js");
console.log(date.getDay());

app.use(express.static("public"));

const items = ["Buy Food", "Drink Water", "Wacthing Anime"];
const Itemwork = [];

app.use(BodyParser.urlencoded({ extends: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // res.sendFile(__dirname+"/index.html");
    const day = date.getDay();

    res.render("list", { ListTitle: day, AddList: items });


})



app.get("/work", (req, res) => {

    res.render("list", { ListTitle: "Work List", AddList: Itemwork })

})


app.post("/", (req, res) => {

    const item = req.body.Item;
    // console.log(req.body);
    console.log(req.body.list);
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

app.get("/about", (req, res) => {
    res.render("about");
})


app.listen(3000, () => console.log("server is running at server 3000"));