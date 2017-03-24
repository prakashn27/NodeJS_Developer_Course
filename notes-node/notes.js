console.log('Starting Notes.js');

const fs = require('fs');

// var originalNote = {
// 	title: "some t",
// 	body: "some body"
// };
// var originalNoteStr = JSON.stringify(originalNote);

// fs.writeFileSync('notes.json', originalNoteStr);

// var noteString = fs.readFileSync('notes.json');

var addNote = (t, b) => {
	console.log('adding Note ', t, b);
	var obj = {};
	obj.title = t;
	obj.body = b;
	var objStr = JSON.stringify(obj);
	fs.writeFileSync('notes.json', objStr);
};

var listNote = () => {
	console.log('listing all notes...');
	var notes = fs.readFileSync('notes.json');
	console.log(JSON.parse(notes));
};

var getNote = (title) => {
	console.log('getting note for title ', title);
	var notes = fs.readFileSync('notes.json');
	var dict = JSON.parse(notes);
	console.log('title:', title, " body:", dict.body);
}

var removeNote = (title) => {
	console.log('removing note with title ', title);
	var notes = fs.readFileSync('notes.json');
	var dict = JSON.parse(notes);
	console.log('removing title:', title, " body:", dict.body);
	dict.title = null;
	dict.body = null;
	console.log(dict);
};

module.exports = {
	addNote: addNote,
	listNote,
	getNote,
	removeNote
};


// module.exports.addNote = (title, body) => {
// 	console.log('addNote');
	
// };

// module.exports.add = (x,y) => {
// 	return x+y;
// };