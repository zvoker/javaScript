console.log("zacetk");


var loc1=3;
var loc2=4;
var loc3=5;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;

while(isSunk==false){
console.log("while");

 guess=prompt("AIm,fire!","");

if (guess>=0 && guess<=6){
guesses++;

 if (guess==loc1 || guess==loc2 || guess==loc3 ){
  hits++; 
  if (hits==3){
 document.write("my ship is sunk!");
 isSunk=true; }
   
   
 
 } 
} else {
alert("enter valid number!");
}  

}

console.log("konec");

