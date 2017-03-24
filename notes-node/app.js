'use strict';
console.log('starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// add remove list
console.log(process.argv);
var argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);

if(command == 'add') {
	console.log('adding new note');
	notes.addNote(argv.title, argv.body);
} else if(command == 'list') {
	console.log('listing notes');
	notes.listNote();
} else if(command == 'remove') {
	console.log('removing the last note');
	notes.removeNote(argv.title);
} else if(command == 'read') {
	console.log('reading note');
	notes.getNote(argv.title);
} 
else {
	console.log('Command not recognized');
}


//var res = notes.addNote();
// console.log(res);
// console.log(notes.add(4,5));

// console.log(_.isString('Prakash'));
// console.log(_.isString(true));
// console.log(_.uniq([1,2,1,2,3,1,4,5,4,5]));


// var user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username} you are ${notes.age}`); 

// console.log(user['username']);