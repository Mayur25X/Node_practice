const EventEmitter=require("events");

const event= new EventEmitter();


// alternate
// const event=require("events");

event.on('SayMyName',()=>{
    console.log("Your Name is Mayur N Uikey");
});



event.on("SayMyName",()=>{
    console.log("ANime");          // MultiPle event can call of the same function 
})
event.on("SayMyName",()=>{
    console.log("ROG");          // MultiPle event can call of the same function 
})
event.on("SayMyName",()=>{
    console.log("Gto");          // MultiPle event can call of the same function 
})


event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`);
})
//
event.emit("checkPage",200,"ok")


event.emit("SayMyName"); //It always Bottom of the Event Function 



