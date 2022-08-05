const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/19_createAPI.json`, 'utf-8');
  //   const objData=JSON.parse(data);
  //   return objData;
  // console.log(objData.data.type);'
  // return data;
  // })
  if (req.url == "/") {
    res.end("Hello From the home sides")
  }
  else if (req.url == "/about") {
    res.end("Hello from about Page")
  }
  else if (req.url == "/contact") {
    res.end("Hello From the contact page ");

  }
  else if (req.url == "/UserApi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
    const objData = JSON.parse(data);
    console.log(objData.data[0].type)
  }
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end(`<div class="moon"></div>
        <div class=" moon__crater moon__crater1"></div>
        <div class="moon__crater moon__crater2"></div>
        <div class="moon__crater moon__crater3"></div>
        
        <div class="star star1"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
        <div class="star star4"></div>
        <div class="star star5"></div>
        
        <div class="error">
          <div class="error__title">404</div>
          <div class="error__subtitle">Hmmm...</div>
          <div class="error__description">It looks like one of the  developers fell asleep</div>
          <button class="error__button error__button--active">LOGIN</button>
          <button class="error__button">CONTACT</button>
        </div>
        
        <div class="astronaut">
          <div class="astronaut__backpack"></div>
          <div class="astronaut__body"></div>
          <div class="astronaut__body__chest"></div>
          <div class="astronaut__arm-left1"></div>
          <div class="astronaut__arm-left2"></div>
          <div class="astronaut__arm-right1"></div>
          <div class="astronaut__arm-right2"></div>
          <div class="astronaut__arm-thumb-left"></div>
          <div class="astronaut__arm-thumb-right"></div>
          <div class="astronaut__leg-left"></div>
          <div class="astronaut__leg-right"></div>
          <div class="astronaut__foot-left"></div>
          <div class="astronaut__foot-right"></div>
          <div class="astronaut__wrist-left"></div>
          <div class="astronaut__wrist-right"></div>
          
          <div class="astronaut__cord">
            <canvas id="cord" height="500px" width="500px"></canvas>
          </div>
          
          <div class="astronaut__head">
            <canvas id="visor" width="60px" height="60px"></canvas>
            <div class="astronaut__head-visor-flare1"></div>
            <div class="astronaut__head-visor-flare2"></div>
          </div>
        </div>`);
  }
});

server.listen(8900, () => {
  console.log("Listening to the Port on 8900")
})
