"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C13 - BÚSQUEDA EN ARREGLOS ************");-

/******************* || ITERANDO ARREGLOS CON FOR | IN || *******************/
console.log("\n|| ITERANDO ARREGLOS CON FOR | IN");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];

for (let i in platillos) {
    console.log(platillos[i]);
}/*De esta forma estamos iterando y trayendo cada uno de los datos que se 
encuentran dentro del arreglo platillos*/