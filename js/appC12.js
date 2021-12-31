"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C12 - TRABAJAR CON ARREGLOS EN JAVASCRIPT ************");-

/******************* || CREA TU PRIMER ARREGLOS CON JAVASCRIPT || *******************/
console.log("\n|| CREA TU PRIMER ARREGLOS CON JAVASCRIPT");

console.log("Ejemplo 2 ------ var name = ['Dato1', 'Dato2]");
var ejemploArray = ["Cadena de Texto", true, 102, 10.5];/*Esto es un array y 
podemos almacenar diferentes tipos de datos*/
console.log(ejemploArray);

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];
/*Los array comienzan siempre a partir del 0.
La posicion 0 = tacos.
La posicion 1 = Langosta.
La posicion 2 = Lasaña. */
console.log(platillos);

console.log("\nEjemplo 2 ------ var name = new Array('Dato1', 'Dato2)");
var ejemploNewArray = new Array ("1er Dato", true, 100, 100.1);
/*En esta forma estamos instancianso un array con la clase Array, y dentro de los 
parentesis podemos poner los datos necesarios*/
console.log(ejemploNewArray);

var bebidas = new Array("Coca Cola", "Pepsi", "Té", "Agua mineral", "Agua de Horchata");
console.log(bebidas);

/*Para saber si una variable es un array o no vamos a usa .isArray */
console.log(Array.isArray(bebidas));//Nos imprime true