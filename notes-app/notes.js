const fs = require("fs");
const chalk = require("chalk");
const { callbackify } = require("util");

const getNotes = function () {
  return "Your notes..";
};

const addNote = function (title, body) {
  const notes = loadNotes(); //loads notes
  const duplicateNotes = notes.filter(function (note) {
    //finds duplicate of notes
    return note.title === title; //returns true if titles are duplicates
  });

  if (duplicateNotes.length === 0) {
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

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title; //Returns true if titles are not a match
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!!"));
    savedNotes(notesToKeep); //calls saved notes and passes notes to keep
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const savedNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON); //saves stringified data of note
};

const loadNotes = function () {
  try {
    //loads notes from notes.json
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []; //if notes.json doesnt exist, store in empty array
  }
};

module.exports = {
  //exports object with properties and values as functions
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
