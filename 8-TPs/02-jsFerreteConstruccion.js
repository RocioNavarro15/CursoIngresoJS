/*
Rocio Navarro DIV Z 
TP 02
2.Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo()
{   
    var largo;
    var ancho;
    var perimetro;
    var resultado;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    perimetro = largo * 2 + ancho * 2;
    resultado = perimetro * 3;

    alert("La cantidad necesaria de alambre es " + resultado);  
}
function Circulo () 
{
    var radio;
    var alambre;
    var resultado;
    var PI = 3.14;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    resultado = (2 * PI * radio) * 3;

    alert("La cantidad necesaria de alambre es " + resultado);
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;
   

   alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}
