"use strict" //************** || Siempre debe de ir en la linea 1 ||**************

//CAP.1 APROXIMACIÓN A JAVASCRIPT

//Este es un modo seguro donde JS comprueba que estemos llevando a cabo "buenas practicas" pues
//corrobora que las variables y demás cosas no esten usando palbras reservadas u otro tipo de problemas.

alert('Hola desde un archivo externo'); /*De este lado tambien tenemos alertas, el 
orden del JS es importante al momento de declararlo en  el HTML*/

console.log("Hola consola"); /*Podemos enviar mensajes directamente a la consola 
para eso usaremos || console.log("Hola consola"); ||  */

//Hay dos formas de hacer comentarios con doble diagonal (//) o comentario de bloque (/* Informacion a ignorar*/)
/*Así podemos comentar el código para tener una mejor perpectiva de lo que hicimos
Esto es un comentario en bloque */


/****ERRORES DE MUESTRA EN EL MODO ESTRICTO*****/
//Usando el moso estricto podemos ver que en la cosola nos mostrará un mensaje de error con las dos siguientes declaraciones

//x = "3.1416"; //Nos indica que la variable no esta definida.

//var public = "Hola"; //Nos indica que estamos usando una palabra reservada.