const fs = require('fs')
const book = {
  title: "Dopamine Nation",
  author: "Anna Lembke",
};

const bookJSON = JSON.stringify(book); //stringify object into JSON format
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);//Converts JSON to an object
console.log(parsedData.author);
