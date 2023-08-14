var burgermenu = document.getElementById("burgermenu");
var burgerIcon = document.getElementById("burgerIcon");
var burgerClosed = document.getElementById("burgerXIcon");

function abrir (){
    burgermenu.style.height = "240px";
    burgerIcon.style.display = "none";
    burgerClosed.style.display = "block";
}
function cerrar (){
    burgermenu.style.height = "50px";
    burgerIcon.style.display = "block";
    burgerClosed.style.display = "none";
}