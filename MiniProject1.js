//EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst, false);

//User input 1 convert in JS to a number
var userinput1 = parseInt(document.getElementById("input1").value);
window.alert(userinput1);

//Generate random number from 1-100 and store in a variable 'r'
var r = Math.floor((Math.random())*100+1);


