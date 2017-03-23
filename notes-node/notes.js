console.log('Starting Notes.js');

module.exports.age = 10;

module.exports.addNote = () => {
	console.log('addNote');
	return 'New Note';
};

module.exports.add = (x,y) => {
	return x+y;
};
console.log(exports);