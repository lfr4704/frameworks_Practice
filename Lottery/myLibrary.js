//random lottery ticket generator


function sortNumbers(a,b){
      return a-b;
}

function randomLotteryGenerator(){
    var ticket =[];
   
   for (var i=0; i<5; i++){
       
    ticket.push(Math.floor(Math.random()*56) +1);
    
   }
   
   ticket.sort(sortNumbers)
    return ticket
}



//this code tell what functions are allowed to run in this file.
module.exports = { 
    ticket: randomLotteryGenerator
}