"use strict"

/******************* || TIPO DE DATO NUMERICO || *******************/
var edad = 35;
var edad1 = 40.5;
var edad2 = -35;
//Podemos usar numeros enteros, flotante, positivos y negativos.

var cantidad = "100"; //Los numeros no llevan comillas porque este tipo de datos se interpretan como un string.
console.log(cantidad);

var nuevaCantidad = Number(cantidad);

parseInt(); //Lo usamos para convertir a numero entero.
parseFloat(); //Lo usamos para convertir un numero a flotante.
 


/******************* || CADENAS DE TEXTO O STRING || ***************/
//Podemos trabajar cadenas de texto con comillas simples y comillas dobles, el uso es indisto.
var bebida = "agua";
var comida = 'cevivhe';

var instrucciones = 'El platillo de llama "cevivhe"';//Podemos anidar comillas dentro de


//Si nosotros quisieramos transformar este tipo de dato numerico a un tipo de dato string vamos a hacer lo siguiente
var edad = 34;
var edadText = String(edad); //Y asi convierte el tipo de dato numerico a un String o cadena de texto.


/******************* || DATOS BOOLEANOS || ***************/
var activo = true;
var estado = Boolean(10<9);


/******************* || FECHAS EN JS || ***************/
var fecha = new Date();//Nos muestra el dia, mes, año y minuto de la fecha
fecha.getMonth();//El metodo get nos permite acceder a diferentes metodos para otener un dato de "tiempo".




