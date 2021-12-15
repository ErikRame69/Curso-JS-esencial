"use strict" //Activamos modulo estricto para evitar muchas fallas.

/******************* || CONDICION IF || *******************/

var number1 = 10;
var number2 = 20;
var resultado = "Sin datos";

//      || CASO 2 ||     //

if (number1 > number2 ) /* Usando el operador relacional "Mayor que" estamos 
validando si la condicion es real, en caso de que la condicion si sea real 
se ejutara lo que este contenido en los siguiente corchete*/
{ //Todo lo que se encuentre dentro de los corcheres se ejecutara si la condicion es true
    
    resultado = "La condición se cumplió";/**Los que estamos haciendo aqui es
    asignar el nuevo valor a "resultado si es que la condición es real"*/
}/*En caso de que la condición no sea real no se ejecutara nada*/
console.log("El resultado de la evaluacion IF es: ", 
            resultado); // Imprimira en la cosola "Sin datos"

//      || CASO 2 ||     //

/*Si nosotros hacemos una condicion diferente lo que se imprimiria en la consola
 seria "La condición se cumplio". */
if (number1 < number2 ){
    resultado = "La condición se cumplió";
}
console.log("El resultado de la evaluacion IF es: ", resultado);
//Imprime en la consola "la condición se cumplio"

