"use strict";

console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
var res = notes.addNote();

console.log(res);
console.log(notes.add(4,5));

console.log(_.isString('Prakash'));
console.log(_.isString(true));
console.log(_.uniq([1,2,1,2,3,1,4,5,4,5]));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `hello ${user.username} you are ${notes.age}`); 

// console.log(user['username']);