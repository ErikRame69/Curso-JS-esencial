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



/******************* || EVENTOS CON EL TECLADO || *******************/
console.log("\n|| EVENTOS CON EL TECLADO");

window.addEventListener("keydown", function(event){
    console.log("Pulsando tecla");
    console.log(String.fromCharCode(event.keyCode));
})/*Con este evento vamos a estar  escuchando cada que nosotros pulsamos una tecla
De esta manera nos indicara cuando se mantenga pulsada una tecla
En este ejemplo podemos ver que si nosotros solicitamos que letra es primero nos 
pasa un codigo y este lo tenemos que transformar usando el codigo de la linea 57
Nota: Al precionar la barra espaciadora no aparece nada pero con las demas letras si*/

window.addEventListener("keypress", function(event){
    console.log("Tecla pulsada");
})/*Con esto indicamos el momento en que la tecla se mantiene oprimida*/

window.addEventListener("keyup", function(event){
    console.log("Tecla liberada");
})/*Y por ultimo tenemos este evento que nos indica cuando la tecla a sido liberada*/



/******************* || EVENTOS DE CARGA DE DOCUMENTO || *******************/
console.log("\n|| EVENTOS DE CARGA DE DOCUMENTO");

//Este evento nos ayuda a saber cuando se ha cargado todo el contenido de la página
window.addEventListener('load', function(){
    console.log("El contenido de la página se a cargado de manera correcta.");
    /*De este lado podemos poner algunas  de las funciones que serviran para nuestra 
    pagina así podemos asegurar que las funciones se ejecutaran solo si el evento se 
    ha cumplido o en este caso, si la pagina o documento se ha cargado 
    satisfactoriamente*/
});



/******************* || EVENTOS MULTIMEDIA EN JAVASCRIPT || *******************/
console.log("\n|| EVENTOS MULTIMEDIA EN JAVASCRIPT");

/*Para poder ejecutar los eventos en la pagina web lo que vamos a hacer es llamar
la parte a usar desde el HTML con el querySelector de java script */

const video = document.querySelector('.amazonVideo');

video.addEventListener("play", function () {
    console.log("El video ha iniciado");
});//Nos sirve para escuchar cuando le han puesto play a un video de la pagina web.

video.addEventListener("seeking", function () {
    console.log("Se esta buscando en el video", this.currentTime);
});//Nos indica si estamos buscando algo en el video y en que segundos los hacemos

video.addEventListener("ended", function () {
    console.log("El video ha terminado");
});//Muestra en consola cuando hemos terminado el video.