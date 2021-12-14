"use strict" //Activamos modulo estricto para evitar muchas fallas.

/******************* || OPERADORES ARITMÉTICOS || *******************/

var number1 = 10;
var number2 = 20;

// Suma                    || + ||
var suma = number1 + number2;
console.log("La suma de: " + number1 + " + " + number2 + ", Es igual a = " + suma);

// Resta.                  || - ||
var resta = number1 - number2;
console.log("La resta de: " + number1 + " - " + number2 + ", Es igual a = " + resta);

// Multiplicación.         || * ||
var multiplicacion = number1 * number2;
console.log("La multiplicación de: " + number1 + " * " + number2 + ", Es igual a = " + multiplicacion);

// División.               || / ||
var division = number1 / number2;
console.log("La division de: " + number1 + " / " + number2 + ", Es igual a = " + division);

// Modulo o residuo.       || % ||
var modulo = number1 % number2;
console.log("La modulo o residuo de: " + number1 + " % " + number2 + ", Es igual a = " + modulo);

// Incremento.             || ++ || 
var incremento = number1;
incremento++;
console.log("El incremento de: " + number1 + " ++ " + ", Es igual a = " + incremento);

// Decremento.             || -- ||
var decremento = number1;
decremento--;
console.log("El decremento de: " + number1 + " -- " + ", Es igual a = " + decremento);



/******************* || OPERADORES RELACIONALES || *******************/
//Este tipo de operadores nos regresan un valor false

// var number1 = 10;     Fueron comentadas por que estan
// var number2 = 20;     declaradas en la parte superior

// Mayor que.                            || >  ||
var mayorQue = number1 > number2;
console.log("Mayor que: " + mayorQue);

// Menor que.                            || <  ||
var menorQue = number1 < number2;
console.log("Menor que: " + menorQue);

// Mayor o igual que.                    || >= ||
var mayorOIgualQue = number1 >= number2;
console.log("Mayor o Igual que: " + mayorOIgualQue);

// Menor o igual que.                    || <= ||
var menorOIgualQue = number1 <= number2;
console.log("Menor o igual que: " + menorOIgualQue);

// Igual que.                            || == ||
var igualQue = number1 == number2;
console.log("Igual que: " + igualQue);

// Diferente a, o no es igual que.       || != ||
var diferenteQue = number1 != number2;
console.log("Diferente a: " + diferenteQue);