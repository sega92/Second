// creating the function that loops 
function datetime(){
//Declaring a variable
var x;
var d = new Date().getDay();
switch(d)
{
case 0:
x = "SUNDAY";
break;
case 1:
x = "MONDAY";
break;
case 2:
x = "TUESDAY";
break;
case 3:
x = "WEDNESDAY";
break;
case 4:
x = "THURSDAY";
break;
case 5:
x = "FRIDAY";
break;
case 6:
x = "SATURDAY";
break;
}
document.getElementById("demo").innerHTML=x;

} 

//invoking the function and writing the value into DOM

