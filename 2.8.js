
// creating the function that loops 
function loop(){
//Declaring a variable
var text = ""; 
var i = 1;
//Creating a while loop
while (i<11){ //loops until i is less than 11
text += i + " " ;
i++;
}
return text;

} 

//invoking the function and writing the value into DOM
document.getElementById("demo").innerHTML = loop();
