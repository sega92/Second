//EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click',calculate, false);

//Creating the function that calculates the monthly interest payment
function calculate(){

//User input 1 convert in JS to a number
var principal = parseInt(document.getElementById("input1").value);

//User input 2 convert in JS to a number
var rate = parseInt(document.getElementById("input2").value);
    
//User input 3 convert in JS to a number
var time = parseInt(document.getElementById("input3").value);

var totalinterest = principal *(time/rate);  
var monthlyinterest = totalinterest/12;  
document.getElementById("demo").innerHTML = "Interest Paid = " + totalinterest + "<br> Monthly Interest = " + monthlyinterest;    
}