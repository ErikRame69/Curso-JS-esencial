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



/******************* || COMO MEDIR Y ACCEDER EN JAVASCRIPT A UN ARREGLO || *******************/
console.log("\n|| CÓMO MEDIR Y ACCEDER EN JAVASCRIPT A UN ARREGLO");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];
console.log("Hay " + platillos.length + " platillos en el menú");

/*Para poder acceder a  la informacion contenida en un posicion o indice especifico 
en el arreglo haremos lo siguiente*/

var platillosOne = platillos[1];
console.log("En platillo seleccionado es: " + platillosOne + " y esta bunisima");
/*Si nosotros queremos acceser a un dato en un arreglos que AUN NO EXISTE nos 
saldra undefined.*/



/******************* || ARREGLOS MULTIDIMENCIONALES || *******************/
console.log("\n|| ARREGLOS MULTIDIMENCIONALES");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón"];
var paises = new Array("México", "Canada", "Estados U", "Fracia");

/*Para hacer arreglos multidimencionales solo debemos de crear un nuevo array
e insertar en el los otros arreglos */

var menu = [platillos, paises];
console.log("El menú completo es: ", menu);

console.log("\nPlatillos___________");
console.log(menu[0][0]); //Tacos
console.log(menu[0][1]); //Langosta
console.log(menu[0][2]); //Lasana
console.log(menu[0][3]); //Salmon

console.log("\nPaises______________");
console.log(menu[1][0]); //Mexico
console.log(menu[1][1]); //Canada
console.log(menu[1][2]); //Estados U
console.log(menu[1][3]); //Francia

/*Con esto indicamos que entramos al primer arreglo y estando dentro del arreglo
accedemos a la informacion de la posicion indicada del 2do parametro*/