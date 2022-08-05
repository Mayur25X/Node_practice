//Stream are objects 
//

const fs = require("fs");
const http = require("http");


const server = http.createServer();



server.on("request", (req, res) => {



    // fs.readFile("21_Input.txt", (err, data) => {
    //     if (err)
    //         return console.error(err);
    //     res.end(data.toString());
    // });




    // 2nd Way 
    // Reading from a Stream
    // Create A readable Stream
    // Handle Stream Events --> Data,end and error

    // const rstream = fs.createReadStream("21_Input.txt");
    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData);
    // })


    // rstream.on("end", () => {
    //     res.end();
    // })


    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File Not FOund");
    // })

    const rstream = fs.createReadStream("21_Input.txt");
    rstream.pipe(res);

});



server.listen(8000, () => {
    console.log("server is Open");
})