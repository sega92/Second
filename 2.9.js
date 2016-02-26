
// creating the function that loops 
function loop(){
//Declaring a variable
var text = ""; 
var i = 1;
//Creating a do while loop
do
{ //loops until i is less than 11
text += i + " " ;
i++;
} while (i<11)
return text;

} 

//invoking the function and writing the value into DOM
document.getElementById("demo").innerHTML = loop();
