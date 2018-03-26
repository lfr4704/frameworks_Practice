//my library

function getDate() {
var today = new Date();
return today;
}

function getSumProduct (num1, num2) {
    var sum = num1 + num2;
    var product = num1 * num2;
    return sum + product;
}

function printName (text) {
    return  text + " World";
}

function changeStringToNum () {
    var num3 = parseInt("10");
    return num3;
}

//this code tell what functions are allowed to run in this file.
module.exports = { 
    getDate, //you dont have to assign a name
    sum2: getSumProduct, // to the left of ":" can be called differently or the same
    printName: printName,
    changeStringToNum: changeStringToNum
}