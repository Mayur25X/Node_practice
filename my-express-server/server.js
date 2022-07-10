const express = require("express");
const app = express();


app.get('/', (req, res) =>res.send("Hello"));

app.get("/contact", (req, res) => { res.send("contact me at :9359187044") })
app.get("/about",(req,res)=>{res.send("Hello I am Mayur Uikey , So Iam currently Learning NodeJS")})

app.listen(4000, () => console.log("this is the server"));