let fs = require('fs');
let data = require('./data.json');

console.log(data.name);

fs.readFile('./data.json', 'utf-8', function(err, data) { //"function ()" is a callback 
// fs.readFile('./data.json', (err, data) => { (this is another way to write it)
	var data = JSON.parse(data); //this to convert it into an object
	console.log(data.name);
});