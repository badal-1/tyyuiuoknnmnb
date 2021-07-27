canvas = document.getElementById('comp_screen');
yu = canvas.getContext("2d");
iw = 300;
ih = 150;
var ii;
ix = 0;
iy = 0;
function add() {
iit = new Image(); 
iit.onload = uimg; 
iit.src = ii;   
}
function uimg() {
yu.drawImage(iit, ix, iy, iw, ih);
}
window.addEventListener("keydown",mk);
function mk(e)
{
kp = e.keyCode;	
if((kp >=97 && kp<=122) || (kp >=65 && kp<=90))	
{
apl();
document.getElementById("yuiop").innerHTML="You have pressed alphabet key.";
}
else if((kp >= 48) &&  (kp<=57))		
{
num();
document.getElementById("yuiop").innerHTML="You have pressed number key.";
}
else if(kp ==37 || kp == 38 || kp ==39 || kp == 40)
{
arrow();
document.getElementById("yuiop").innerHTML="You have pressed Arrow key.";
}
else
{
other();
document.getElementById("yuiop").innerHTML="You have pressed symbol or other key.";
}
}
function apl()
{
ii = "https://i.postimg.cc/5yqFzyqX/Alpkey.png";
add();
}
function num()
{
ii = "https://i.postimg.cc/0jfbQ3Pm/numkey.png";
add();
}
function arrow()
{
ii = "https://i.postimg.cc/N0994pkq/Arrkey.png";
add();
}
function other()
{
ii="https://i.postimg.cc/MK9nJhsJ/otherkey.png";
add();
}
	
