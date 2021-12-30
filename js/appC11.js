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