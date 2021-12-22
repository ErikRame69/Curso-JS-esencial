"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C8 - Trabaja con eventos en JavaScript ************");-


/******************* || EVENTOS CON EL MOUSE || *******************/
console.log("\n|| EVENTOS CON EL MOUSE");

/*Para poder hacer uso de los eventos en JavaScript primero tenemos que indicar a
que parte del codigo esta dirigida. 

Para esto haremso los siguiente:

1.Hacer una asosiacion entre HTML y JavaScript 
    Esto lo conseguiremos mendiante la clase (en esta caso llamada boton en el 
    HTML, vease ref 1.0 en el HTML) la asignamos a una variable en el JS (que 
    tambien se llamara boton, vease ref 1.1) y asociandola en el JS medante el querySelector 
    
2.Añadimos un metodo de escucha de eventos (addEvenListener)
    Ahora haremos uso de un evento llamado addEvenListener ; un escucha de 
    eventos es decir un boton que este pendiente de todos los eventos que ocurran en
    el boton que hemos referencidado desde el HTML
    vease ref 1.2  */


const boton = document.querySelector('.boton');//variable 1.1
//Esta es la asociacion entre el HTML y el JS y la asignacion a la constante "boton"

boton.addEventListener('click', function (){
    console.log("El botón se a pulsado");
});
/*Este evento se actica cuando damos click en el boton y muestre lo indicado
IMPRIME EN CONSOLA: 
||  El boton se a pulsado*/

boton.addEventListener('mouseover', function (){
    console.log("El mouse esta sobre el botón");
});
/*Esta evento se activa cuando el mause pasa sobre el boton y muestra lo indicado 
IMPRIME EN CONSOLA:
||  El mouse esta sobre el boton*/

boton.addEventListener('mouseout', function (){
    console.log("El mouse esta fueran del botón");
});
/*Eate evento se activa cuanso el mouse se encuentra fuera del boton.
IMPRIME EN CONSOLA:
||  El mouse esta fuera del boton */