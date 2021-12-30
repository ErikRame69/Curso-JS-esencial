"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C11 - TRABAJANDO CON CADENAS DE TEXTO ************");-

/******************* || CREACION DE CADENAS DE TEXTO || *******************/
console.log("\n|| CREACION DE CADENAS DE TEXTO");

/*trabajar con cadenas de texto es facil. 
Para poder crear una cadena de texto tendremos que asignar a una varible la cadena de
texto, esta la podemos declarar usando "" (Dos comillas dobles) o '' (Dos
comillas simples) */

var pais = "México";
console.log(pais);
/*En este caso solo estamos asignando una cadena de texto a la variable pais, esta
es la forma mas sencilla de hacerlo y asi podemos escribir grandes texto o descripciones
en fin, podemos darle muchos usos.
IMPRIME:
México */

var comida = new String("Sincronizadas");
console.log(comida);
/*Este caso es un poco especial, porque estamos creando una cadena de texto a traves 
del objeto String. Esto hace que toda la cadena de textos se guarde como una objeto 
o un Array, por lo tanto al mostrar  el valor en cosola imprime lo siguiente

String {'Sincronizadas'}
0: "S"
1: "i"
2: "n"
3: "c"
4: "r"
5: "o"
6: "n"
7: "i"
8: "z"
9: "a"
10: "d"
11: "a"
12: "s"
length: 13
[[Prototype]]: String
[[PrimitiveValue]]: "Sincronizadas" 

Este tipo de creacion de cadenas de texto debemos de usarla en determinados casos
ya que lo que guarda es un objeto como tal. */



/******************* || MEDIR UNA CADENA DE TEXTO || *******************/
console.log("\n|| MEDIR UNA CADENA DE TEXTO");

/*En nuesta carrera como desarrollador muchas veces vamos a necesitar saber en
la longitud de una cadena de texto, esta puede ser desde 0 (Donde podemos indicar 
el no continuar) hasta "infinito" */

var mensaje = "a b c";/*IMPRIME EN CONSOLA: "La cadena de texto tiene: 5 letras"
La propiedad .length tomara en cuenta todos los caracteres,
incluidos los espacion */

console.log("La cadena de texto tiene: " + mensaje.length + " letras");
//Imprime: 5



/******************* || BUSQUEDA DE TEXTO POR INDICES Y POR EXPRESIONES REGULARES || *******************/
console.log("\n|| BUSQUEDA DE TEXTO POR INDICES Y POR EXPRESIONES REGULARES");

var mensaje2 = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

//indexOf
console.log("** indexOf ** ");
resultado = mensaje2.indexOf("aprendiendo");
console.log(resultado);
//Nos muestra la primer posicion de la primer incidencia en la cadena de texto

//lastIndexOf
console.log("** lastIndexOf ** ");
resultado = mensaje2.lastIndexOf("aprendiendo");
console.log(resultado);
//Nos muestra la primera posicion de la ultima incidencia hallada en la cadena de texto

//search
console.log("** search ** ");
resultado = mensaje2.search("aprendiendo");
console.log(resultado);
//Es muy similar al indexOf asi que podemos usar indexOf o search

//serch | Expresion regular
console.log("** serch | Expresión regular ** ");
resultado = mensaje2.search(/ja/i);/*Esta expresion se coloca dentro de dos barras
// dentro de las barras es donde indicamos que queremos que busque:
/Aqui va la expresion a buscar/
y por fuera podemos poner diferentes parametros, como por ejemplo que sea incase 
sensitive:
" /Aqui va la expresion a buscar/i " la i nos indica que la busqueda sera insencible
a mayusculas o minusculas*/
console.log(resultado);