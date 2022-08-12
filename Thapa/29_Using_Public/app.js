const express = require("express");
const app = express();
const path = require("path");



const staticPath=path.join(__dirname+"/public");
 console.log(staticPath);
app.use(express.static(staticPath));
app.set('view engine', "hbs");

app.get("/", (req, res) => {
    res.send("Hello word");
})
app.get("/", (req, res) => {

    res.render("index");

})

app.get("/server", (req, res) => {
    res.send("Get ");
})


app.listen(8520, () => {
    console.log("Connected");
})