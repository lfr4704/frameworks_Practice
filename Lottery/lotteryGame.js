const library = require("./myLibrary.js");  //this is an absolute path. Node does not understand relative path 

for (var i=0; i<100000; i++){
    console.log(library.tickets());
}