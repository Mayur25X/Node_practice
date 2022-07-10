const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.post("/", (req, res) => {
    var num1 =Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var result=num1+num2;
    
    res.send("Thank for respones The result is "+result);
    
});



app.listen(3000, () => console.log("This is the Home page"));