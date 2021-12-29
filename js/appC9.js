"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C9 - VENTANAS EMERGENTES O CUADROS DE DIÁLOGO EN JAVASCRIPT ************");-

/******************* || VENTANA DE ALERTA EN JAVASCRIPT || *******************/
console.log("\n|| VENTANA DE ALERTA EN JAVASCRIPT");

const videoC9 = document.querySelector('.amazonVideo');
//Aqui llamamos al video

videoC9.addEventListener("ended", function (){
    alert("También podemos hacer uso de los saltos de linea \n El video ha terminado");
});

/*Para este tipo de alertas no podremos indicar al usuario cuando se reproducio el
video (no podremos escuchar), ya que este tipo de alertas busca mostrar una 
notificacion o mostrale al usuario que algo a sucedido.

RECOMENDACIONES:
Hay que tener cuidado al estar usando las alerta, con eso quiero decir que no hay 
que hacer uso indiscriminadamente de ella, ya que si principal funcion es informar,
por lo mismo es mejor solo usarlo en casos especificos.
Esta notificacion o aviso es para darle una nptificacion de alta escala al usuario*/