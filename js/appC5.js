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



/******************* || CONDICIÓN ELSE || *******************/
//Else se ejecuta si la condicion de if no se cumple, es como el "plan B"

// var number1 = 10;                       Se han comentado esta variables 
// var number2 = 20;                       porque ya estan declradas en la parte
// var resultado = "Sin datos";            superior, y solo son demostrativas

if (number1 > number2 ){ //La condicion if no se cumple
    resultado = "La condición se cumplió";
}else{ //Else podríamos traducirlo, como "en caso contrario" o "al contrario"
    resultado = "La condición no se cumplió"
}/*Como podemos ver en este caso al no cumplirse se le asigna la cadena de texto 
a la variable resultados y al no validarse if se imprime en cosola el mensaje
"La condicion no se cumplió */
console.log("El resultado de la evaluacion IF es: ", resultado);
