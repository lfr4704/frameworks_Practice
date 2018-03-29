const myLibrary = require("./scripts1.js")  //this is an absolute path. Node does not understand relative path 

let commandArguments = process.argv;
//console.log(process.argv);
let otherArgs = [];

commandArguments.shift(); // this removes node directory info, this is automatic when passing information to terminal
commandArguments.shift(); //this removes the path of script file, this is a default when passing information to terminal


for (var x = 0; x < commandArguments.length; x++){
    otherArgs.push(parseInt(commandArguments[x]));
}

var batchOfTickets = [];

for (var i = 0; i < 1000000; i++) {
    batchOfTickets.push(myLibrary.ticket());
}
var winningTicket = myLibrary.ticket();

for (var i = 0; i < batchOfTickets.length; i++) {
    
    var matchingNumbers = 0;
    
    for (var e = 0; e < batchOfTickets[i].length; e++) {
        
        if (batchOfTickets[i][e] == winningTicket[e]) {
            matchingNumbers++;1
        }
        
    }
    
    if (matchingNumbers >= 5) {
        console.log("Current Ticket matches " + matchingNumbers + " Numbers to winning Numbers.");
        console.log(batchOfTickets[i]);
    }
    
    // Check typeof both arrays. Might different objects.
    if (batchOfTickets[i] == winningTicket) {
        console.log("Winning Ticket: " + batchOfTickets[i]);
    }

}

console.log("Winning Numbers: " + winningTicket);



//this code calls out the functions to be run from the script1 file
console.log(myLibrary.sum2(10,20));
console.log(myLibrary.getDate());
console.log(myLibrary.printName("hello"));
console.log(myLibrary.changeStringToNum());
console.log(otherArgs);
console.log("The mean is " + myLibrary.findMean(otherArgs));
console.log("The median is " + myLibrary.findMedian(otherArgs));