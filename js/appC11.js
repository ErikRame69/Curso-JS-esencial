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



/******************* || BUSQUEDA DE CARACTERES EN CADENAS DE TEXTO || *******************/
console.log("\n|| BÚSQUEDA DE CARACTERES EN CADENAS DE TEXTO");

//var mensaje2 = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
//var resultado;
//Comentado para evitar conflicto con variable de la linea 69

//match
console.log("** match ** ");
resultado = mensaje2.match(/aprendiendo/gi);/*Con match tenemos que hacer uso de 
expresiones regulares.
Como podemos ver tenemos una g despues de la barra diagonal, esto es para que busque 
todas las coincidencias y nos las muestre */
console.log(resultado);

//substr
console.log("** substr ** ");
resultado = mensaje2.substr(6, 11);
            /*El primer para- | El segundo parametro 
            metro indica la   | indica la cantidad de
            posicion inicial  | caracteres a recorrer*/
console.log(resultado);

//substring
console.log("** substring ** ");
resultado = mensaje2.substring(6, 17);
               /*El primer para- | El segundo parametro 
               metro indica la   | indica la segunda posicicion
               posicion inicial  | donde finaliza la busqueda*/
console.log(resultado);

//charAt
console.log("** charAt ** ");
resultado = mensaje2.charAt(3);//Recordemos que este metodo empieza a contar en 0.
console.log("Nos muestra el caracter: ", resultado);



/******************* || BUSQUEDA DE CADENAS DE TEXTO ESPECIFICAS || *******************/
console.log("\n|| BÚSQUEDA DE CADENAS DE TEXTO ESPECÍFICAS");

//var mensaje2 = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";
//var resultado;
//Comentado para evitar conflicto con variable de la linea 69

//startsWith
console.log("** startsWith ** ");
resultado = mensaje2.startsWith("Es");
console.log(resultado);
/*En este metodo podemos hacer añadirle un segundo parametro depues de una coma 
||  " ", parametro|| 
para indicarle en que posicion puede empezar a buscar, ejemplo: */
var texEn = mensaje2.indexOf("JavaScript");
console.log("la posición de la palabra es: ",texEn);
resultado = mensaje2.startsWith("Ja", texEn);
console.log(resultado);

//endWith
console.log("** endWith ** ");
resultado = mensaje2.endsWith("mucho");//Preguntamos si termina con este texto
console.log(resultado);

//includes
console.log("** includes ** ");
resultado = mensaje2.includes("estoy", 8);/*Estamos preguntando si la cadena de texto
incluye la palabra indicada, en este caso "estoy" .
Tambien podemos indicarle un segundo parametros despues de una coma
||  "", parametro || 
para indicar en que posicion debe de empezar a encontrar coincidencias*/
console.log(resultado);



/******************* || METODOS DE GENERACION, REEMPLAZO Y SEPARACION || *******************/
console.log("\n|| MÉTODOS DE GENERACIÓN, REEMPLAZO Y SEPARACIÓN");

var mensaje3 = "     \nEstoy aprendiendo JavaScript y estoy aprendiendo mucho     ";
//Añadi un salto de linea para que nose viera tan desordenado
var resultado;

//repeat
console.log("** repeat ** ");
resultado = mensaje3.repeat(5);/*Indicamos la cantidad de veces que queremos que
se repita la cadena de texto.*/
console.log(resultado);

//replace
console.log("** replace ** ");
resultado = mensaje3.replace("JavaScript", "a programar en JavaScript");
/*                  El primer parametro  | El segundo paramtro es el texto nuevo
                    indica la palabra a  | que remplazara al otro
                    buscar y remplazar   |                                     */
console.log(resultado);
/*Este metodo solo remplaza al mensaje dentro de su uso, NO lo remplaza el v
valor original. */

//slice
console.log("** slice ** ");
resultado = mensaje3.slice(6);/*Lo que hace este metodo es mostrar el mensaje 
despues de la cantidad de caracteres indicados.
En esta caso son 6, esto quiere decir que se saltara 6 caracteres y nos mostrara 
el texto posterior a eso */
console.log(resultado);

//split
/*El metodo Split va a separar toda la cadena de texto en un arreglo*/
console.log("** split ** ");
resultado = mensaje2.split(" ");
console.log(resultado);

//trim
/*Elimina los espacios en blanco, antes y despues de una cadena*/
console.log("** trim ** ");
resultado = mensaje3.trim();
console.log(resultado);