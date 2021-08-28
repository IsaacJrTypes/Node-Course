//Challenge: define and use a function in a new file:
//
//1. create new file called notes.js
//2. create getNotes function that returns "Your notes.."
//3. Export getNotes function
//4. from app.js, load in and call the function print message to console.

const validator = require("validator");

const getNotes = require("./notes.js");

//Note call function before exe file, otherwise function is passed but not called
const msg = getNotes();

console.log(msg);

//Example using validator, console will print true
console.log(validator.isEmail("duck@gmail.com"));

/* Additional Notes */
//
//use require with '.' means current level path (this directory), '/' means root level, then specify file (within root level) to execute
// const add = require("./utils.js");
//Export var name can be different than name1 on this page

// const sum = add(4, -2);

// console.log(sum);
