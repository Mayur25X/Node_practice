const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


const StaticPath = path.join(__dirname + "/public");
app.use(express.static(StaticPath));

const templatesPath = path.join(__dirname + "/templates/views");
// console.log(templatesPath);
app.set("view engine", "hbs");
app.set("views", templatesPath);


const partialsPath = path.join(__dirname + "/templates/partials");
console.log(partialsPath);
hbs.registerPartials(partialsPath);


app.get("/", (req, res) => {

    res.render("index", {
        Ahome: "active",
    });

})
app.get("/about", (req, res) => {
    res.render("about", {
        Aabout: "active",
    });
})


app.get("/contact", (req, res) => {
    res.render("contact", {
        AContact: "active",
    })
})

app.get("/course", (req, res) => {
    res.render("course", {
        ACourses: "active",
    })
})



app.get("/detail", (req, res) => {
    res.render("detail", {
        Apage: "active",
    })
})

app.get("/feature", (req, res) => {
    res.render("feature", {
        Apage: "active",
    })
})

app.get("/team", (req, res) => {
    res.render("team", {
        Apage: "active",
    })
})
app.get("/testimonial", (req, res) => {
    res.render("testimonial", {
        Apage: "active",
    })
})


///adding 404 Page 

app.get("/about/*",(req,res)=>{
    res.render("404",{
        ecomment:"Page Not Found",
    })
})
app.get("*",(req,res)=>{
    res.render("404",{
        ecomment:"Page Not Found",
    })
})
app.listen(2000, () => {
    console.log("Connected");
})