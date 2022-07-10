const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

const { url } = require("inspector");

app.use(bodyParser.urlencoded({ extends: true }));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");
    // res.send("Server is running ");
})

app.post("/", (req, res) => {
    const city = req.body.CityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=52e77abe3013fc6f7944d45212e5ec9c&units=metric#";

    https.get(url, (respones) => {

        console.log(respones.statusCode)
        respones.on("data", (data) => {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description
            const weatherCity = weatherData.name;
            const icon = weatherData.weather[0].icon;
            console.log(icon)
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

            // Alternate method

            // res.write("<h1>The temperature In ${weatherCity} is ${temp} degress Celcius</h1>");
            // res.write("<p> The weather is currently ${weatherDescription}</p>");
            // res.write("<img src=${imageUrl}>");

            // res.send();

            res.send(`<h1>The temperature In ${weatherCity} is ${temp} degress Celcius</h1>
        <p> The weather is currently ${weatherDescription}</p>
        <img src=${imageUrl}>`);


        })
    }
    )
})

app.listen(3000, () => console.log("Server is Up and running"));