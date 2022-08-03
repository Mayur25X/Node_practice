const os=require("os");
console.log(os.arch());

const freeMemory=os.freemem();
console.log(freeMemory/1024/1024/1024);

const Host=os.hostname();
console.log(Host)
console.log(os.platform)

console.log(os.type())