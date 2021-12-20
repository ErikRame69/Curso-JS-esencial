"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C6 - USO DE CONDICIONES O DECISIONES EN JAVASCRIPT ************");-


/******************* || ESTRUCTURA BASICA DE UNA FUNCION || *******************/
console.log("\nESTRUCTURA BÁSICA DE UNA FUNCIÓN");

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