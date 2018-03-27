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

var numbersArray = [10,10,20,30,40,50,60];
let sumOfNum = 0;


function findMean() {
    for (let i = 0; i < numbersArray.length; i++) {
        sumOfNum = sumOfNum + numbersArray[i];
    }
    let mean = sumOfNum/numbersArray.length;
    return mean;
}

function findMedian() {
    numbersArray.sort();
    console.log(numbersArray);// check
    if (numbersArray.length%2 == 0){ //if number is even
        let middle = numbersArray.length/2;
        console.log(middle);//check
        let median = Math.round((numbersArray[middle-1] + numbersArray[middle])/2);
        return median;
    } else { //if number is odd
        let middle = Math.round(numbersArray.length/2);
        let median = numbersArray[middle-1];
        console.log(middle);//check
        return median;
    }
     
}

function findMode() {
    
}

//this code tell what functions are allowed to run in this file.
module.exports = { 
    getDate, //you dont have to assign a name
    sum2: getSumProduct, // to the left of ":" can be called differently or the same
    printName: printName,
    changeStringToNum: changeStringToNum,
    findMean,
    findMedian
}