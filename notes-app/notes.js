const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");
const { error } = require("console");
//const { callbackify } = require("util");

const getNotes = () => {
  return "Your notes..";
};

const addNote = (title, body) => {
  const notes = loadNotes(); //loads notes
  //find duplicate of notes and returns true if titles are duplicates (searches all notes w/o stopping)
  const duplicateNotes = notes.filter((note) => note.title === title);
  //find duplicate of note and stop once match found
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      //pushes/changes an object with properties with command prompt inputs
      title: title,
      body: body,
    });
    savedNotes(notes); //saves notes
    console.log(chalk.inverse.white("New Note added!"));
  } else {
    console.log(chalk.inverse.red("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  //filter method creates new array depending on parameters and returns true if titles are not a match
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!!"));
    savedNotes(notesToKeep); //calls saved notes and passes notes to keep
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const savedNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON); //saves stringified data of note
};

const loadNotes = () => {
  try {
    //loads notes from notes.json
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []; //if notes.json doesnt exist, store in empty array
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow.inverse("Your Notes: "));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse.magenta(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.redBright.inverse("No note found!"));
  }
};
module.exports = {
  //exports object with properties and values as functions
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
