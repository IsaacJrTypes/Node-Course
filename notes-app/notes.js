const fs = require("fs");

const getNotes = function () {
  return "Your notes..";
};

const addNote = function (title, body) {
  const notes = loadNotes(); //loads notes
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      //pushes/changes an object with properties with command prompt inputs
      title: title,
      body: body,
    });
    savedNotes(notes); //saves notes
    console.log("New Note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = function (title) {
  console.log(title);
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
