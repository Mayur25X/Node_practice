// const chalk=require('chalk');
// console.log(chalk.red.uderline.inverse("hell"));





//check the email is valid or not
var validator=require("validator");

// console.log("hello");

const res=validator.isEmail("Mayur@gmail.com");
console.log(res)