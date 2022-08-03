// const add=require("./module")

// const addition=add(5,5);
// console.log(addition);


// method 2
// const oper=require("./module")

// console.log(oper.add(5,8));
// console.log(oper.sub(5,8));
// console.log(oper.mul(5,8));


const {add,sub,mul}=require("./module");

console.log(add(5,8));
console.log(sub(5,8));
console.log(mul(5,8));
