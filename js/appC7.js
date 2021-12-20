"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C6 - USO DE CONDICIONES O DECISIONES EN JAVASCRIPT ************");-


/******************* || ESTRUCTURA BASICA DE UNA FUNCION || *******************/
console.log("\n|| ESTRUCTURA BÁSICA DE UNA FUNCIÓN");

/*Estructura de la funcion 

Llamamos a la funcion con la palabra reservada "function".
esta debe de tener un nombre (name) y parametros si es que lo requerimos (params).
A continuacion la estructura de la funcion:

||        function name(params) {           ||
||        * Aqui van las instrucciones*     ||
||        }                                 || 

A continuacion un ejemplo:                  */

//         Nombre de la funcion     Parametros (si se requieren)
function        saludar                         ()                  {
    
    //      || Contenido o instrucciones ||
    
    var saludo = "Hola, estoy aprendiendo JavaScript";
    //A la variable saludo le asignamos una cadena de caracteres.
    
    console.log(saludo); //Imprime en consola la variable saludo

    return saludo;/*Nos indica que regresa, podemos llamar a la funcion desde 
    la consola con el nombre de la funcion e indicando que es un metodo.
    Ejemplo:
    
    saludar()                   */
}

saludar();//Aqui llamamos a la funcion para que esta se pueda ejecutar.
//Tambien podemos invocar funciones desde la consola



/******************* || PARAMETROS DE UNA FUNCION || *******************/
console.log("\n|| PARÁMETROS DE UNA FUNCIÓN");

/*En este caso le pasaremos los parametros a la funcion saludar
Como vemos en los parametros colocamos nombre y edad, estos son las variables
con las que nuestra funcion va a trabajar*/

function saludando(nombre, edad) {

    console.log("Hola: " + nombre); /*Aqui concatenamos una cadena de texto 
    con los valores asignado en la linea 65 */

    console.log("Edad: " + edad);/*Aqui concatenamos una cadena de texto 
    con los valores asignado en la linea 65 */

    var resultado = nombre + " tiene " + edad + " años";/*De este lado creamos
    una variable llamada resultado donde concatenamos lo parametros con una 
    cadena de texto*/

    return resultado; //Retornamos el valor de la variable resultado
}

var mensaje = saludando("@ErikDanielRM", 22); /*Nosotros estamos llamando a la 
funcion desde aqui y le estamos asigando algunos valores a a los parametros 
declarado en la linea 50, en pocas palabras le estamos parsando el nombre y la 
edad para que la funcion pueda trabajar con estos valores

Como tambien podemos observar estamos asigando el calor de la funcion saludando 
a una variable llamada mensaje, de esta forma podemos llamar asigar todo lo que
se encuentra dentro de la funcion a la variable y podemos llamar a "mensaje" desde
cualquier parte del codigo, y esta nos mostrara todo lo que ha ejecutado la
funcion.*/

console.log(mensaje);/*Como "saludando" se a asignado a "mensaje" al llamar a 
mensaje nos mostrara lo que la funcion contiene. */

/*IMPRIME:      Hola: @ErikDanielRM
                Edad: 22
                @ErikDanielRM tiene 22 años     */