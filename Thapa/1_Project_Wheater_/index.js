// const bodyparser=require("Body-parser");
const fs = require("fs");
const http = require("http");
const reqt = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");
const replaceVal=(tempval,orgval)=>{
    let temperature=tempval.replace("{%tempval%}",orgval.main.temp);
    temperature=temperature.replace("{%humidity%}",orgval.main.humidity);
    temperature=temperature.replace("{%wind_speed%}",orgval.wind.speed);
    temperature=temperature.replace("{%pressure%}",orgval.main.pressure);
    temperature=temperature.replace("{%name%}",orgval.name);
    temperature=temperature.replace("{%icon%}",orgval.weather[0].icon);
    console.log(orgval.weather[0].icon);
    
    // console.log(orgval.rain.1h)
    // temperature=temperature.replace("{%rain%}",orgval.rain);
    temperature=temperature.replace("{%condition%}",orgval.weather[0].description);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {


        reqt('https://api.openweathermap.org/data/2.5/weather?q=Nagpur&units=metric&appid=52e77abe3013fc6f7944d45212e5ec9c')
            .on('data',function (chunk) {

                const objData = JSON.parse(chunk);
               const arrObj=[objData];


            //    console.log(arrObj);
            //    console.log(arrObj[0].name);


            const realTimeData=arrObj.map((val)=>replaceVal(homeFile,val)).join(" ");

    //  console.log(realTimeData);

    res.write(realTimeData);

            }
            )
            .on('end',  (err)=> {
                if (err) return console.log('connection closed due to errors', err);
                    res.end();
                // console.log('end');
            });





    }
    // res.end(homeFile)
})

server.listen(1988, () => {
    console.log("Server is running");
})