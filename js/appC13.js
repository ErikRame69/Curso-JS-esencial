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