var fs = require('fs');

var important = "Very important";

//Reads database, saves current text, then adds new text and saves it.
fs.readFile('database', function(err, buffer) {
  var tempText = buffer.toString();
  var data = tempText + "\nThis is on a new Line.";

  fs.writeFile('database', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
  
});

//Read text from database and stores it as a string into text variable.
var text = fs.readFileSync('database').toString('utf8');
console.log(text);