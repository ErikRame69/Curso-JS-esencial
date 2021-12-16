"use strict" //Activamos modulo estricto para evitar posibles fallas.

/******************* || CONDICION IF || *******************/
console.log("CONDICION IF");

var number1 = 10;
var number2 = 20;
var resultado = "Sin datos";

//-------------------------|| CASO 1 ||----------------------//

if (number1 > number2 ) /* Usando el operador relacional "Mayor que" estamos 
validando si la condicion es real, en caso de que la condicion si sea real 
se ejutara lo que este contenido en los siguiente corchete*/
{ //Todo lo que se encuentre dentro de los corcheres se ejecutara si la condicion es true
    
    resultado = "La condición se cumplió";/**Los que estamos haciendo aqui es
    asignar el nuevo valor a "resultado si es que la condición es real"*/
}/*En caso de que la condición no sea real no se ejecutara nada*/
console.log("El resultado de la evaluacion IF es: ", 
            resultado); // Imprimira en la cosola "Sin datos"

//-------------------------|| CASO 2 ||----------------------//

/*Si nosotros hacemos una condicion diferente lo que se imprimiria en la consola
 seria "La condición se cumplio". */
if (number1 < number2 ){
    resultado = "La condición se cumplió";
}
console.log("El resultado de la evaluacion IF es: ", resultado);
//Imprime en la consola "la condición se cumplio"



/******************* || CONDICIÓN ELSE || *******************/
//Else se ejecuta si la condicion de if no se cumple, es como el "plan B"
console.log("\nCONDICIÓN ELSE");

// var number1 = 10;                     Se han comentado esta variables 
// var number2 = 20;                     porque ya estan declradas en la parte
// var resultado = "Sin datos";          superior, y solo son demostrativas

if (number1 > number2 ){ //La condicion if no se cumple
    resultado = "La condición se cumplió";
}else{ //Else podríamos traducirlo, como "en caso contrario" o "al contrario"
    resultado = "La condición no se cumplió"
}/*Como podemos ver en este caso al no cumplirse se le asigna la cadena de texto 
a la variable resultados y al no validarse if se imprime en cosola el mensaje
"La condicion no se cumplió */
console.log("El resultado de la evaluacion IF es: ", resultado);
//Imprime en cosola "La condición no se cumplió".



/******************* || USANDO LA CONDICIÓN IF - ELSE IF - ELSE || *******************/
console.log("\nUSANDO LA CONDICIÓN IF - ELSE IF - ELSE ");
/*La condicion else if nos permite tener mas validaciones  en caso de ser necesario
  podemos decir que agregamos mas opciones
  Una ventaja es que podemos añadir tantas validaciones como necesitemos*/

// var number1 = 10;                     Se han comentado esta variables 
// var number2 = 20;                     porque ya estan declradas en la parte
// var resultado = "Sin datos";          superior, y solo son demostrativas

if (number1 > number2 ){ //La condicion if no se cumple
    resultado = "La condición se cumplió";
}else if (number1 == number1){
    resultado = "Los numeros son iguales"; //ESTA CONDICION SE CUMPLE
}/*Es en esta condicion donde podemos añadir mas opciones, de esta manera podemos 
tomar en cuenta una serie de parametros mas amplia */
else{//Al cumplirse la condicion pasada podemos esta ya no se ejecuta
    resultado = "La condición no se cumplió";
}

console.log("El resultado de la evaluacion IF es: ", resultado);
//Imprime en cosola "Los numeros son iguales".



/******************* || CONDICIONES ANIDADAS || *******************/
console.log("\nCONDICIONES ANIDADAS");

// var number1 = 10;                     Se han comentado esta variables 
// var number2 = 20;                     porque ya estan declradas en la parte
// var resultado = "Sin datos";          superior, y solo son demostrativas

var newDate = 5;

if (number1 > newDate){
    resultado = "La condición se cumplió";
    if (number1 < number2){ /*Aqui empieza la funcion anidada
        Esta condicion se tiene que cumplir para poder mostrar lo que estan 
        dentro del if, en caso contrario, se mostrara lo que esta en el else*/
        resultado = "Evaluación anidada verdadera";
    }else{//Se ejecuta si y solo si if es falso
        resultado = "No se cumplio la evalucion anidada";
    }
} else {
    resultado = "La condición no se cumplió";
}

console.log("El resultado de la evalución anidada es:", resultado);
//Imprime en consola "El resultado de la evalución anidada es: Evaluación anidada verdadera"



/******************* || LA ESTRUCTURA SWITCH || *******************/
console.log("\nLA ESTRUCTURA SWITCH");

//-------------------------|| CASO 1 ||----------------------//

var edad = 30;
var resultado = "";

switch (edad) { // esta es la variable con la que se compararan los casos del switch
    case 10: //Este es la primer condicion
        resultado = "La edad es 10 años";//Esto guarda un string en resultado
        break; // Con el Break indicamos que la funcion debe para ahi.
    case 20:
        resultado = "La edad es 20 años";
        break;
    case 30:
        resultado = "La edad es 30 años";
        break;
    case 40:
        resultado = "La edad es 40 años";
        break;
    default: /*En caso de que ningun caso coincida se ejecutara 
    lo que se encuentre dentro de default*/
        resultado = "Ningun dato coincide con algun caso";
        break;
}
console.log("El resultado del Switch es:", resultado);
//Imprime en consola "El resultado del Switch es: La edad es 30 años"

//-------------------------|| CASO 2 ||----------------------//

var producto = "TV";
switch (producto) {
    case "TV":
        resultado = "Se eligió TV";
        break;
    case "Radio":
        resultado = "Se eligió Radio";
        break;
    case "Teléfono":
        resultado = "Se eligió Teléfono";
        break;
    case "Internet":
        resultado = "Se eligió Internet";
        break;
    default:/*En caso de que ningun caso coincida se ejecutara 
    lo que se encuentre dentro de default*/
        resultado = "No se eligió nada";
        break;
}/*Incluso podemos anidar mas estructuras de control 
dentro de los casos del Switch*/

console.log("El resultado del Switch es:", resultado);
//Imprime en la cosola "El resultado del Switch es: Se eligio TV"