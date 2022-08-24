const express=require("express");
const app=express();

const requests=require("requests")

app.get("/weather",(req,res)=>{
    
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=52e77abe3013fc6f7944d45212e5ec9c`)
    .on('data', function (chunk) {

        const objData = JSON.parse(chunk);
        const arrObj = [objData];
        //    console.log(arrObj);
           console.log(`City name is ${arrObj[0].name} and the temp is ${arrObj[0].main.temp}`);
        // const realTimeData = arrObj.map((val) => replaceVal(homeFile, val)).join(" ");
        //  console.log(realTimeData);
        res.send(arrObj[0].name);
    }
    )
    .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
        // console.log('end');
    });

})


app.listen(2000,()=>{
    console.log("Connected");
})