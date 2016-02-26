function loop(){
var text = ""; 
var i, j;
for (i=1; i<11; i++){
for (j=1; j<11; j++){        
text += j + " " ;
}
}
return text;
} 

 //invoking a function into DOM
    document.getElementById("demo").innerHTML = loop();
    