document.write("This is from behalf .js file!!!!!!!<br>")  ; 
console.log("to je consola");
/*setTimeout(wakeUpUser, 500);
function wakeUpUser() {
alert("Are you going to stare at this boring page forever?");
}
*/
var rando=4; //random st od 0 do 4
console.log("2del");
var arey= new Array();
for (x=0;x<7;x++){
arey[x]=0;
}
for (x=rando;x<5;x++){
arey[rando]=1;
arey[rando+1]=1;
arey[rando+2]=1;
//document.write(" for looping in "+x+arey[rando]+"<br>");
//document.write("<br> ["+arey+"<br> ]");
}
var meja=5
var stevHitov=0;
var stPosk=1;
while (stevHitov < 3 && stPosk<=(meja)){

 if (arey[prompt("vstavi number", "")-1]==1){
  stevHitov++;
  stPosk++;
  document.write("thats hit <br>");
 } else{
    document.write("thats miss <br>");
    stPosk++;
   }
}
if (stPosk==meja+1 && stevHitov < 3){
document.write("Izgubili ste igro. <br> Uporabili ste "+meja+" poskusov in niste potopili ladjice.<br>");
} else {
   document.write("vspesno ste resili igro.<br>");
  }

document.write("lp, bye");


console.log("po resili igro");
