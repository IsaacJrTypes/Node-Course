const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//Customized yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Removes note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "lists your notes",
  handler() {
    notes.listNotes();
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Reads note",
  handler() {
    console.log("Reads notes");
  },
});

yargs.parse(); //parses all args created

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
