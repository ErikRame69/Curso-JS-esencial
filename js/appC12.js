"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C12 - TRABAJAR CON ARREGLOS EN JAVASCRIPT ************");-

/******************* || CREA TU PRIMER ARREGLOS CON JAVASCRIPT || *******************/
console.log("\n|| CREA TU PRIMER ARREGLOS CON JAVASCRIPT");

console.log("Ejemplo 2 ------ var name = ['Dato1', 'Dato2]");
var ejemploArray = ["Cadena de Texto", true, 102, 10.5];/*Esto es un array y 
podemos almacenar diferentes tipos de datos*/
console.log(ejemploArray);

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];
/*Los array comienzan siempre a partir del 0.
La posicion 0 = tacos.
La posicion 1 = Langosta.
La posicion 2 = Lasaña. */
console.log(platillos);

console.log("\nEjemplo 2 ------ var name = new Array('Dato1', 'Dato2)");
var ejemploNewArray = new Array ("1er Dato", true, 100, 100.1);
/*En esta forma estamos instancianso un array con la clase Array, y dentro de los 
parentesis podemos poner los datos necesarios*/
console.log(ejemploNewArray);

var bebidas = new Array("Coca Cola", "Pepsi", "Té", "Agua mineral", "Agua de Horchata");
console.log(bebidas);

/*Para saber si una variable es un array o no vamos a usa .isArray */
console.log(Array.isArray(bebidas));//Nos imprime true



/******************* || COMO MEDIR Y ACCEDER EN JAVASCRIPT A UN ARREGLO || *******************/
console.log("\n|| CÓMO MEDIR Y ACCEDER EN JAVASCRIPT A UN ARREGLO");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón", "Filete Kobe"];
console.log("Hay " + platillos.length + " platillos en el menú");

/*Para poder acceder a  la informacion contenida en un posicion o indice especifico 
en el arreglo haremos lo siguiente*/

var platillosOne = platillos[1];
console.log("En platillo seleccionado es: " + platillosOne + " y esta bunisima");
/*Si nosotros queremos acceser a un dato en un arreglos que AUN NO EXISTE nos 
saldra undefined.*/



/******************* || ARREGLOS MULTIDIMENCIONALES || *******************/
console.log("\n|| ARREGLOS MULTIDIMENCIONALES");

var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón"];
var paises = new Array("México", "Canada", "Estados U", "Fracia");

/*Para hacer arreglos multidimencionales solo debemos de crear un nuevo array
e insertar en el los otros arreglos */

var menu = [platillos, paises];
console.log("El menú completo es: ", menu);

console.log("\nPlatillos___________");
console.log(menu[0][0]); //Tacos
console.log(menu[0][1]); //Langosta
console.log(menu[0][2]); //Lasana
console.log(menu[0][3]); //Salmon

console.log("\nPaises______________");
console.log(menu[1][0]); //Mexico
console.log(menu[1][1]); //Canada
console.log(menu[1][2]); //Estados U
console.log(menu[1][3]); //Francia

/*Con esto indicamos que entramos al primer arreglo y estando dentro del arreglo
accedemos a la informacion de la posicion indicada del 2do parametro*/



/******************* || OPERACIONES BASICAS DE UN ARREGLO || *******************/
console.log("\n|| OPERACIONES BÁSICAS DE UN ARREGLO");

console.log("-----------push---------");
var platillos = ["Tacos", "Langosta", "Lasaña", "Salmón"];
console.log("Antes ", platillos);

platillos.push("Tostadas");
platillos.push("Tamales");
platillos.push("Pavo");
console.log("Después ", platillos);
//Con este metodo estamos mandado estas 3 cadenas de texto a el arreglo platillo

console.log("-----------pop---------");
platillos.pop();/*Para poder eliminar varios elementos debemos de repetir el 
.pop las neces necesarias. */
console.log("Platillos después de pop: ", platillos);

console.log("-----------join y toString---------");
/*Podemos convertir un array en una cadena de texto con el uso de .join o de 
.toString */
console.log(".toString");
var arrayToString = platillos.toString();
console.log(arrayToString);
console.log(".toJoin");
var arrayToString2 = platillos.join();
console.log(arrayToString2);



/******************* || GENERACION DE ARREGLOS CON SPLIT(), FROM() Y OF() || *******************/
console.log("\n|| GENERACIÓN DE ARREGLOS CON SPLIT(), FROM() Y OF()");

var mensaje = "ceviche, tacos, tortillas, pasta";
var platillos = mensaje.split(', ');/*Es aqui donde nosotros le indicamos el 
caracter que marca la separación, en este caso estamos indicando que cada valor 
del arrego esta dividido o separado por ", " */

/*Tambien hay otra forma de generar un arreglo, pero esta forma la usamos cuando tenemos
valores en nuestra pagina web 
Para poder generar el arreglo, lo primero que tenemos que hacer es traernos dicha 
informacion*/

var platillosHTML = Array.from(document.querySelectorAll(".platillos p"));/*Primero asignamos
el valor de la clase platillos en HTML a la variable platillosHTML en JavaScript
le estamos indicando que vaya a la clase platillos y solo nos traiga lo que se 
encuentra dentro de la etiqueta p.
Todo esto lo "envolvemos" en la clase Array.from para indicarle de manera formal que
sera un arreglo */
console.log("Sin el textContent: ",platillosHTML);

var platillosMap = platillosHTML.map(platillo => platillo.textContent)
/*                      Este es un parametro  | Aqui indicamos que de ese parametro
                        para guardar de manera| solo queremos el contenido en
                        temporal los datos que| texto.
                        recibe.                                   */
/*Ahora, lo que hacemos aqui es asignar a la varible platillosMap el arreglo que se
encuentra dentro de platillosHTML, pero, estamos usando en metodo .map, que por si 
solo busca el los parametros y los separa por si solo */
console.log("Con el textContent: ", platillosMap);

var platillosOf = Array.of("Queso", "Pan", "Leche", "Harina", "Huevo");
//Convierte todo lo que este dentro y separado por una coma en un array.
console.log(platillosOf);



/******************* || ORDENANDO UN ARREGLO || *******************/
console.log("\n|| ORDENANDO UN ARREGLO");

var platillos = ["Tacos", "Langosta", "Albóndigas", "Salmón"];
console.log("Antes de ordenarlos ", platillos);
//Se muestra como esta en el arreglo

platillos.sort();
console.log("Despues de ordenarlos ", platillos);
//Se muestra de manera ordenanda alfabeticamente

platillos.reverse();
console.log("Despues de ordenarlos de manera inversa ", platillos);
//Se muestra de manera ordenanda alfabeticamente invertido