//my library

function getDate() {
var today = new Date();
console.log(today);
return today;
}

function getSumProduct (num1, num2) {
    var sum = num1 + num2;
    var product = num1 * num2
    console.log("enter numbers")
    return sum + product;
}

function printName () {
    console.log("Luis Robles");
}

function changeStringToNum () {
    var num3 = parseInt("10");
    console.log(num3);
    return num3;
}

console.log(printName());