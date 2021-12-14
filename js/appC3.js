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


/******************* || SIMBOLOS || ***************/
//Cada vez que yo genero un simbolo se esta generando un dato unico alrededor del programa
var simbolo1 = Symbol();
var simbolo2 = Symbol();
//Aunque paresca que simbolo1 y simbolo2 son similares por su nulo contenido, estos son completamente diferentes.

var ambiente = Symbol('dev');

/******************* || ESTRUTURA DE DATOS CON JSON || ***************/
//JavaScript Object Notation 

var persona = {nombre: 'Erik', LinkedIn:'Erik Daniel Ramirez Mendoza'}; //Esto viene siendo un objeto de datos en formato JSON

var personas = [{nombre: 'Daniel', LinkedIn:'Daniel Mendoza'},
                {nombre: 'Ernesto', LinkedIn:'Ernesto de la Cruz'},
                {nombre: 'Armando', LinkedIn:'Armando Roman'}];
console.log(personas);

var personaJSON = JSON.stringify(personas);
console.log(personaJSON);
//Es este ejemplo estamos convirtiendo un objeto de tipo JSON en una cadena de texto o String

var nuevaPersonas = JSON.parse(personaJSON);
console.log(nuevaPersonas);
//Es este caso 
 