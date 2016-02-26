//EVENT LISTENER
var event1 = document.getElementById("button1");
event1.addEventListener('click',check, false);


//Generate random number from 1-100 and store in a variable 'r'
var r = Math.floor((Math.random())*100+1);

//Creating a variable for number of guesses
var noofguess = 0;

//Creating the function that checks the user input value with the randomly generated value
function check(){

noofguess ++;  //Increments when the user clicks the button

//User input 1 convert in JS to a number
var userinput1 = parseInt(document.getElementById("input1").value);
alert(r);  


if (userinput1 === r) //Checks if the userinput is similar
{
//Writing strings into DOM
document.getElementById("demo").innerHTML = "The correct number is " + r + "<br>" + "CONGRATULATIONS, You have guessed it right <br>" + "Number of guesses: " + noofguess;
}            
else if (userinput1 > r){ //Checks if the userinput is large
//Writing strings into DOM
document.getElementById("demo").innerHTML = "TOO LARGE";
}
else
{
//Writing strings into DOM
document.getElementById("demo").innerHTML = "TOO SMALL";
}            
}



