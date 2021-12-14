"use strict"

var nombre = "Erik"; //Variable de tipo global

console.log(nombre);

/**************** || SIGNIFICADO DE UNA VARIABLE || *******************
La palabra var es un a palabra reservada para declarar una variable
es de suma importancia que se le asigne un nombre que describa su funcion.
Pero, ¿Qué significa la declaracion?

Es una variable de alcance global, o sea todo se puede usar desde cualquier lado del codigo.

var + "nombre de la variable" = "Valor de la varible";

Var      =  declara la variable, nosotros le decimos a JS que esto es una varible
nombre   = el nombre que hara la variable, es importante que escriba lo que hace
=        = Le asigna el valor indicado a la variable (en este caso nombre)
"Valor"  = Este es el valor que tendra dicha varible 

NOTA:
Debemos de tener cuidado porque las variables son de tipo autodestructivo, esto quiere decir que si nosotros 
remplazamos el valor que tiene almacenado una varible, no podremos recuperarla, por eso ha que tener cuidado con 
los datos que almacenamos*/

function saludo(){
    let nombre = "Daniel";
    console.log(nombre);

    /* || CONTENEDOR DE BLOQUE LET || 
     * Es un contenedor que usa solamente el espacio asignado dentro de la funcion
     * y su alcance solo sera dentro de la funcion.
     */

    let edad = 34;
    console.log(edad);
}

saludo();

/* Si queremos trabajar con varibles globales usaremos "var"

y si queremos trabajar con un cierto alcance limitado dentro de una funcion o scrip usamos "let"*/


// **************** || COSNT || ****************
const pi = 3.1416;
console.log(pi); 
/**De esta forma podemos hcaer que un tipo de dato persista y que este no pueda ser alterado */