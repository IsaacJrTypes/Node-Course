const chalk = require("chalk");

const yargs = require("yargs");

const getNotes = require("./notes.js");

yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Removes note",
  handler: function () {
    console.log("Removes a note");
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "lists your notes",
  handler: function () {
    console.log("Lists notes");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Reads note",
  handler: function () {
    console.log("Reads notes");
  },
});
console.log(yargs.argv);
/* Additional Notes */
//
//use require with '.' means current level path (this directory), '/' means root level, then specify file (within root level) to execute
// const add = require("./utils.js");
//Export var name can be different than name1 on this page

// const sum = add(4, -2);

// console.log(sum);

//Example using validator, console will print true
//console.log(validator.isEmail("duck@gmail.com"));

//Note call function before exe file, otherwise function is passed but not called
//const msg = getNotes();
