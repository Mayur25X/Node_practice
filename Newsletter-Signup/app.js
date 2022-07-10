const express = require("express");
const request = require("request");
const bodyParser = require("body-parser")
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/singup.html");
})

app.post("/", (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;

    const data =
    {
        members: [{
            email_address: Email,
            status: "subscribed",
            merge_fields:
            {
                FNAME: FirstName,
                LNAME: LastName
            }
        }
        ]
    };

    const JsonData = JSON.stringify(data);
    const url = "https://us11.api.mailchimp.com/3.0/lists/0601e4d73d"


    const options = {
        method: "POST",
        auth: "25mayurx:5b60f9ee0d0f796474eca1d8b576113b-us11"
    }

    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            // console.log(JSON.parse(data));
            if (response.statusCode===200) {
                
                res.sendFile(__dirname+"/success.html")
            }
            else
            {
                res.sendFile(__dirname+"/failure.html");
            }

        })
    })
    request.write(JsonData);
    request.end();
})

app.post("/failure",(req,res)=>{
    res.redirect("/");
})
app.post("/success",(req,res)=>{
    res.redirect("/");
})

app.listen(process.env.PORT ||3000, () => {
    console.log("Server is Running on port 3000");
})

// API key
// 5b60f9ee0d0f796474eca1d8b576113b-us11

// 5b60f9ee0d0f796474eca1d8b576113b-us11

// unique id
// 0601e4d73d.