//created 3 number variables
var a=22, b=45,c=43;
    
//created function that sums 3 numbers and returns the sum
function sum(x,y,z){
var sum = x+y+z;
//console.log("Just Testing")
return sum;
} 

    
//invoking the function sum and write the value into the DOM
document.getElementById("demo").innerHTML = "Sum of three numbers: " + a + " , " + b + " & " + c + " is " + sum(a,b,c);
