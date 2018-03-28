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


function findMean(numbers) {
    let sumOfNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfNum = sumOfNum + numbers[i];
    }
    let mean = sumOfNum/numbers.length;
    return mean;
}

function sortNumbers(a,b){
      return a-b;
}

function findMedian(numbers) {
    numbers.sort(sortNumbers);
    //console.log(numbers);
    if (numbers.length%2 == 0){ //if number is even
        let middle = numbers.length/2;
        //console.log(middle);
        let median = Math.round((numbers[middle-1] + numbers[middle])/2);
        return median;
    } else { //if number is odd
        let middle = Math.round(numbers.length/2);
        let median = numbers[middle-1];
       // console.log(middle);
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
    findMedian,
    sortNumbers
}