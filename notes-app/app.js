const chalk = require("chalk");

const getNotes = require("./notes.js");

//Note call function before exe file, otherwise function is passed but not called
const msg = getNotes();

console.log(msg);
//Order of methods irrelevent in chalk
console.log(chalk.redBright.bold.inverse("Success!!!"));
//object: process, method: argv- Argument Vector (an array of agruments provided)
console.log(process.argv[2])//prints 3rd (string arg) listed in power shell

/* Additional Notes */
//
//use require with '.' means current level path (this directory), '/' means root level, then specify file (within root level) to execute
// const add = require("./utils.js");
//Export var name can be different than name1 on this page

// const sum = add(4, -2);

// console.log(sum);

//Example using validator, console will print true
//console.log(validator.isEmail("duck@gmail.com"));
