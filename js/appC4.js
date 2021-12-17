"use strict" //Activamos modulo estricto para evitar muchas fallas.

console.log("\n************* C4 - USO DE OPERADORES EN JAVASCRIPT ************\n");


/******************* || OPERADORES ARITMÉTICOS || *******************/
//Este tipo de operador nos permitira hacer calculos aritméticos

var number1 = 10;
var number2 = 20;

// Suma                    || + ||
var suma = number1 + number2;
console.log("\n La suma de: " + number1 + " + " + number2 + ", Es igual a = " + suma);

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



/******************* || OPERADORES RELACIONALES || *******************/
//Este tipo de dato con ayuda a conbinar la evaluacion de 2 o mas condiones

// var number1 = 10;     Fueron comentadas por que estan
// var number2 = 20;     declaradas en la parte superior

// Y o AND               || && ||
var and = (number1 > 10 && number2 > 10);
console.log("El resultado de AND es: " + and);

// O o OR                ** || **
//Es importante notar que es el doble pipe "||""
var or = (number1 > 10 || number2 > 10);
console.log("El resultado de OR es: " + or);

// Negacion o NOT        || ! ||
var not = !(number1 > 10);
console.log("El resultado de la negación es: " + not);



/******************* || OPERADORES DE ASIGNACIÓN || *******************/
/*Los operadores de asignación me permiten guardar el resultado de una 
evaluación, de una operación  o incluso solamente un valor
 dentro de una variable.*/

// var number1 = 10;     Fueron comentadas por que estan
// var number2 = 20;     declaradas en la parte superior

// Asignación simple.           || = ||
var igual = number1;
console.log("El resultado de la asignacion simple es: " + igual);  //10

// Sumar y asignar.             || += ||
var masIgual = 10;
masIgual += number1;
console.log("El resultado de más igual es: " + masIgual);          //20

// Restar y asignar.            || -= ||
var menosIgual = 15;
menosIgual -= number1;
console.log("El resultado de menos igual es: " + menosIgual);     //5

// Multiplicar y asignar.       || *= ||
var porIgual = 10;
porIgual *= number1;
console.log("El resultado del por igual es: " + porIgual);

// Dividir y asignar.           || /= ||
var entreIgual = 100;
entreIgual /= number1;
console.log("El resultado de entre igual es: " + entreIgual);



/******************* || OPERADOR NEGATIVO || *******************/
//Lo  único que  hace es cambiar el signo del valor que se esta almacenando.

var datoA = 10;
var datoB = -datoA;

console.log("El valor del dato A es: " + datoA +
            "\nEl valor del dato B despues del operador negativo es: " + datoB); //-10



/******************* || OPERADOR DE CONCATENACION || *******************/
/*Este tipo de dato concatena dos tipos de datos o valores, este tipo de operados
no sumas dos tipos de datos a menos que sean numeros de otra manera solo concatena
los tipos de datos o valores, o datos y valores*/

// var number1 = 10;     Fueron comentadas por que estan
// var number2 = 20;     declaradas en la parte superior

var nombre = "Erik Daniel";
var apellido = "Ramirez Mendoza";

// Concatenación de números.                 || + ||
var concatNumeros = number1 + number2;
console.log(concatNumeros); //30

// Concatenación de cadenas de texto.        || + ||
var concatTexto = nombre + " " + apellido;
console.log(concatTexto); // Erik Daniel Ramirez Mendoza

// Concatenación de números como texto.      || + ||
var concatNumComoText = "8" + "2";
console.log("Estas lineas de codigo no suman los numero porque estan como un string: "
 + concatNumComoText); // 82

// Concatenación de texto y números.         || + ||
var concatTextNum = number1 + "8";
console.log(concatTextNum); //108



/******************* || OPERADOR TERNEARIO || *******************/
//Operador ternario o condicional,  es un operador compuesto y me permitirá hacer 2 operaciones en una sola

// var number1 = 10;     Fueron comentadas por que estan
// var number2 = 20;     declaradas en la parte superior

// Estructura del operador    || condicion ? TRUE : FAlSE ||
var resultado = number1 < number2 ? "Si es mayor" : "No es mayor";
console.log("El resultado es: " + resultado); //Si es mayor



/******************* || OPERADOR DE TIPO DE DATOS || *******************/
/*Este operador nos sera de mucha ayuda cuando nosotros 
queramos saber que tipo de dato es la variable */

// var number1 = 10;               Fueron comentadas por que estan
// var nombre = "Erik Daniel";     declaradas en la parte superior
var activo = true;

var persona = {
    edad:22,
    deporte: "TaeKwanDo"
}
console.log(typeof number1);               // number
console.log(typeof nombre);                // string
console.log(typeof activo);                // boolean
console.log(typeof persona);               // object
console.log(typeof persona.edad);          // number
console.log(typeof persona.deporte);       // String