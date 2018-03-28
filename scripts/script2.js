const myLibrary = require("./scripts1.js")  //this is an absolute path. Node does not understand relative path 

let commandArguments = process.argv;
//console.log(process.argv);
let otherArgs = [];

commandArguments.shift(); // this removes node directory info, this is automatic when passing information to terminal
commandArguments.shift(); //this removes the path of script file, this is a default when passing information to terminal


for (var x = 0; x < commandArguments.length; x++){
    otherArgs.push(parseInt(commandArguments[x]));
}




//this code calls out the functions to be run from the script1 file
console.log(myLibrary.sum2(10,20));
console.log(myLibrary.getDate());
console.log(myLibrary.printName("hello"));
console.log(myLibrary.changeStringToNum());
console.log(otherArgs);
console.log("The mean is " + myLibrary.findMean(otherArgs));
console.log("The median is " + myLibrary.findMedian(otherArgs));