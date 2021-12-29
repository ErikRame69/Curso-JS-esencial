"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C9 - VENTANAS EMERGENTES O CUADROS DE DIÁLOGO EN JAVASCRIPT ************");-

/******************* || VENTANA DE ALERTA EN JAVASCRIPT || *******************/
console.log("\n|| VENTANA DE ALERTA EN JAVASCRIPT");

const videoC9 = document.querySelector('.amazonVideo');
//Aqui llamamos al video

// videoC9.addEventListener("ended", function (){
// alert("También podemos hacer uso de los saltos de linea \n El video ha terminado");
// });

/*Para este tipo de alertas no podremos indicar al usuario cuando se reproducio el
video (no podremos escuchar), ya que este tipo de alertas busca mostrar una 
notificacion o mostrale al usuario que algo a sucedido.

RECOMENDACIONES:
Hay que tener cuidado al estar usando las alerta, con eso quiero decir que no hay 
que hacer uso indiscriminadamente de ella, ya que si principal funcion es informar,
por lo mismo es mejor solo usarlo en casos especificos.
Esta notificacion o aviso es para darle una nptificacion de alta escala al usuario*/



/******************* || GENERANDO UNA VENTANA DE CONFIRMACION EN JAVASCRIPT || *******************/
console.log("\n|| GENERANDO UNA VENTANA DE CONFIRMACIÓN EN JAVASCRIPT");

/*Este metodo lo usaremos cuando requieramos confirmar alguna accion determinada*/

/*const videoC9 = document.querySelector('.amazonVideo');
    Aqui llamamos al video
    Esta comentada para evitar un conflicto de codigo*/

videoC9.addEventListener("ended", function() {
    let result = confirm("¿Deseas ver el video de nuevo?");/*Lo que estamos haciendo
    en esta variable llamada result es asignar el valor de la confirmacion, este es 
    un dato de tipo booleano, por lo tanto podremos hacer uso de la variable result
    mas adelante para poder ejecutar determinadas acciones dependiendo de la 
    decision del usuario */

    console.log(result);/*De esta manera estamos mostrando el valor que guarda la
    variable result, asi podremos trabajar con este valor mas adelante */

    if (result) {
        videoC9.play();
    }else{
        alert("Bueno, te redireccionaremos a YouTube");
        //setTimeout(function () {
        window.location = "https://www.youtube.com/"    
        //}, 2000);
    } /*Es en esta parte donde nosotros indicamos que hara en caso de que el usuario
    decida confirmar o cancelar, en este caso estamos preguntando al usuario si 
    quiere ver nuevamente el video. Si su respuesta es confirm entonces el video se
    volvera a reproducir usando el metodo play(), pero si su respuesta en cancal
    entonces los redireccionara a la pagina de YouTube*/
});