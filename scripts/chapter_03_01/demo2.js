var fs = require('fs'); //this is how to bring the file system

let data2 = {
	name: "Bob"
}

fs.writeFile('data2.json', JSON.stringify(data2), (err) => {
	console.log("write finished", err);
});