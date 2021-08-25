//Call fs module
const fs = require("fs");
//call fs to write txt
//fs.writeFileSync("notes.txt", "This file was created by Node.js!");

//challenge: Append a message t notes.txt
//1. use appendFileSync to append to the file
fs.appendFileSync('notes.txt','I am appending more text using appendFileSync()')
//2.Run the script
//done
//3.CHeck your work by opening the file and viewing the appended txt
//It worked!! Next time add space in front of message