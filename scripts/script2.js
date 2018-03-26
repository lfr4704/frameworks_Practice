const myLibrary = require("./scripts1.js")  //this is an absolute path. Node does not understand relative path 

//this code calls out the functions to be run from the script1 file
console.log(myLibrary.sum2(10,20));
console.log(myLibrary.getDate());
console.log(myLibrary.printName("hello"));
console.log(myLibrary.changeStringToNum());
