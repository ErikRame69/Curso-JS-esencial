// "use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C10 - TRABAJAR CON NÚMEROS EN JAVASCRIPT ************");-

/******************* || PROPIEDADES NUMERICAS || *******************/
console.log("\n|| PROPIEDADES NUMÉRICAS");

//Haremos uso de prospiedades numericas para determiandas situaciones

console.log("MAX_VALUE: ", Number.MAX_VALUE);
//Nos muestra el valor mas grande con el que podemos usar en JavaScript

console.log("MIN_VALUE: ", Number.MIN_VALUE);
//Nos muestra el valor mas chico con el que podemos usar en JavaScript

console.log("POSITIVE_INFINITY: ", Number.POSITIVE_INFINITY);
//Nos muestra el objeto infinito +

console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);
//Nos muestra el objeto infinito -

console.log("NaN: ", Number.NaN); /*Not a Number 
Nos sirve para saber si un dijito es o no un numero*/



/******************* || METODOS NUMERICOS EN JAVASCRIPT || *******************/
console.log("\n|| MÉTODOS NUMÉRICOS EN JAVASCRIPT");

//Algunos metodos numericos en JS
var numeroC10 = "100.25";

console.log("Number: ", typeof numeroC10, " | ", typeof Number(numeroC10));
/*Esto es similar a las clases wraper de java, pues la clase Number castea de un 
string a la variable numeroC10 a un tipo de dato numerico*/

console.log("parseInt: ", parseInt(numeroC10));
/*Este metodo aparte de castear la variable numeroC10 tambien solo nos muestra los
enteros de dicha variable*/

console.log("parseFloat: ", parseFloat(numeroC10));
/*Es similar a parseInt pero este metodo si nos muestra los decimales*/

console.log("isNaN: ", Number.isNaN(numeroC10));
/*Este metodo nos regresa un valor booleano
Con este metodo estamos preguntando si la variable numeroC10 es un numero, como
es una cadena de caracteres nos regresa un false*/

console.log("isInteger: ", Number.isInteger(numeroC10));
/*COn este metodo estamos preguntando dos cosas:
    1.Si es un numero
    2.Si es un entero
Es importante mensionar que es necesario el uso de la clase Number para poder hacer
uso de esta clase*/



/******************* || METODOS NUMERICOS DE INSTANCIAS || *******************/
console.log("\n|| MÉTODOS NUMÉRICOS DE INSTANCIAS");

var numeroC10_2 = 2.5;

console.log("toExponencial: ", numeroC10_2.toExponential(2));
/*Con este metodo nos regrasa una notacion exponecial del numero que tenemos 
almacenado en la variable*/

console.log("toFixed: ", numeroC10_2.toFixed(2)); /*Con este metodo solicitamos
la cantidad de numeros decimales que tiene una determinada variable y en dado
caso que no coloquemos nada dentro de los parentesis este nos traera un numero
entero redondeado*/

console.log("toPrecision", numeroC10_2.toPrecision(6));
/*Es similar  al tofixed pero esto nos indica la cantidad de decimales que 
necesitamos para nuestro proyecto*/

console.log("toString: ", numeroC10_2.toString());/*Convierte este numero
a una cadena de texto*/