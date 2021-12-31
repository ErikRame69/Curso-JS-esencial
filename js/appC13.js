"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C13 - BÚSQUEDA EN ARREGLOS ************");-

/******************* || ITERANDO ARREGLOS CON FOR | IN || *******************/
console.log("\n|| ITERANDO ARREGLOS CON FOR | IN");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];

for (let i in platillos) {
    console.log(platillos[i]);
}/*De esta forma estamos iterando y trayendo cada uno de los datos que se 
encuentran dentro del arreglo platillos*/



/******************* || ITERACION DE ARREGLOS CON FOREACH() || *******************/
console.log("\n|| ITERACIÓN DE ARREGLOS CON FOREACH()");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];

console.log("----------------Sin mostrar el índice--------------");
platillos.forEach(platillo => console.log(platillo));

console.log("----------------Mostrando el índice----------------");
platillos.forEach((platillo, i) => console.log(i, platillo));



/******************* || BUSCAR EN UN ARREGLO DE JAVASCRIPT || *******************/
console.log("\n|| BUSCAR EN UN ARREGLO DE JAVASCRIPT");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];

var plaElegido = platillos.find( platillo => platillo == "Tacos")
console.log(plaElegido);
//Muestra: Tacos

var menu = [
    {nombre:"Tacos", precio:20, pais:"México"},
    {nombre:"Langosta", precio:1500, pais:"Alemania"},
    {nombre:"Lasaña", precio:425, pais:"Italia"},
    {nombre:"Salmón", precio:800, pais:"Rusia"},
    {nombre:"Filete Kobe", precio:4500, pais:"Japón"}
];
var plaElegido = menu.find(platillo => platillo.nombre == "Lasaña")
console.log(plaElegido);
//Nos muestra todo el objeto
/*Esta formas de buscar dentro de un arreglo son muy utlies para encontrar un 
determinado dato dentro de un arreglo */



/******************* || BUSQUEDA DE INDICE DE ELEMENTOS || *******************/
console.log("\n|| BÚSQUEDA DE ÍNDICE DE ELEMENTOS");

/*findIndex nos ayuda a saber en que posicion del arreglo se encuentra nuestro dato
en lugar de mandarnos un dato usando el indice, nos arroja un indice buscando un 
dato */

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];
var numPlatillo = platillos.findIndex(platillo => platillo == "Lasaña");
console.log("EL numero del platillo es: ", numPlatillo);
//IMPRIME: EL numero del platillo es:  2

var menu = [
    {nombre:"Tacos", precio:20, pais:"México"},
    {nombre:"Langosta", precio:1500, pais:"Alemania"},
    {nombre:"Lasaña", precio:425, pais:"Italia"},
    {nombre:"Salmón", precio:800, pais:"Rusia"},
    {nombre:"Filete Kobe", precio:4500, pais:"Japón"}
];
var numPlatillo = menu.findIndex(platillo => platillo.nombre == "Salmón");
console.log("EL numero del platillo es: ", numPlatillo);
//IMPRIME: EL numero del platillo es:  3



/******************* || FILTRAR ARREGLOS USANDO JAVASCRIPT || *******************/
console.log("\n|| FILTRAR ARREGLOS USANDO JAVASCRIPT");

var menu = [
    {nombre:"Tacos", precio:20, pais:"México"},
    {nombre:"Langosta", precio:1500, pais:"México"},
    {nombre:"Lasaña", precio:425, pais:"Italia"},
    {nombre:"Salmón", precio:800, pais:"Rusia"},
    {nombre:"Filete Kobe", precio:4500, pais:"Japón"}
];

var resultado = null;

resultado = menu.find(platillo => platillo.pais == "México");
console.log(resultado);
/*Si nosotros lo hacemos de esta manera hay una limitante, el metodo find solo 
nos traera la primer incidencia encontrada e ignorara todas las demás.

Para esto tenemos el metodo filter
Este metodo nos traera todas las incidencias encontradas en el arreglo*/

var resultadoFilter = menu.filter(platillo => platillo.pais == "México");
console.log(resultadoFilter); 



/******************* || VALIDACION DE ELEMENTOS EN UN ARREGLO || *******************/
console.log("\n|| VALIDACIÓN DE ELEMENTOS EN UN ARREGLO");

var menu = [
    {nombre:"Tacos", precio:20, pais:"México"},
    {nombre:"Langosta", precio:1500, pais:"México"},
    {nombre:"Lasaña", precio:425, pais:"Italia"},
    {nombre:"Salmón", precio:800, pais:"Rusia"},
    {nombre:"Filete Kobe", precio:4500, pais:"Japón"}
];

var resultadoSome = menu.some(platillo => platillo.precio <= 20);
console.log(resultadoSome);

if (resultadoSome == true) {
    console.log("Si hay platillos menores a 20 pesos");
} else {
    console.log("Lo sentimos, no hay platillos de 20 pesos o menos");
}
/*Esto es como una comparacion y validacion */

var resultadoEvery = menu.every(platillo => platillo.precio <= 20);
/*Este metodo valida que todos los elementos de ese arreglo cumplan con esta 
condicion */
console.log("Todos los platillos cuestan menos de $20 ",resultadoEvery);
if (resultadoEvery == true) {
    console.log("Si hay platillos menores a 20 pesos");
} else {
    console.log("Lo sentimos, no todos platillos cuestan menos de 20 pesos");
}