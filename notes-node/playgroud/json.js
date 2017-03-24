// var obj = {
// 	name: 'Prakash'
// };

// var jsonString = JSON.stringify(obj);
// console.log(typeof jsonString);
// console.log(jsonString);

// var personStr = '{"name":"prakash", "age": 10}';
// var person = JSON.parse(personStr);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: "some t",
	body: "some body"
};
var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);