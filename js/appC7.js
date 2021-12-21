"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C6 - USO DE CONDICIONES O DECISIONES EN JAVASCRIPT ************");-


/******************* || ESTRUCTURA BASICA DE UNA FUNCION || *******************/
console.log("\n|| ESTRUCTURA BÁSICA DE UNA FUNCIÓN");

/*Estructura de la funcion 

Llamamos a la funcion con la palabra reservada "function".
esta debe de tener un nombre (name) y parametros si es que lo requerimos (params).
A continuacion la estructura de la funcion:

||        function name(params) {           ||
||        * Aqui van las instrucciones*     ||
||        }                                 || 

A continuacion un ejemplo:                  */

//         Nombre de la funcion     Parametros (si se requieren)
function        saludar                         ()                  {
    
    //      || Contenido o instrucciones ||
    
    var saludo = "Hola, estoy aprendiendo JavaScript";
    //A la variable saludo le asignamos una cadena de caracteres.
    
    console.log(saludo); //Imprime en consola la variable saludo

    return saludo;/*Nos indica que regresa, podemos llamar a la funcion desde 
    la consola con el nombre de la funcion e indicando que es un metodo.
    Ejemplo:
    
    saludar()                   */
}

saludar();//Aqui llamamos a la funcion para que esta se pueda ejecutar.
//Tambien podemos invocar funciones desde la consola



/******************* || PARAMETROS DE UNA FUNCION || *******************/
console.log("\n|| PARÁMETROS DE UNA FUNCIÓN");

/*En este caso le pasaremos los parametros a la funcion saludar
Como vemos en los parametros colocamos nombre y edad, estos son las variables
con las que nuestra funcion va a trabajar*/

function saludando(nombre, edad) {

    console.log("Hola: " + nombre); /*Aqui concatenamos una cadena de texto 
    con los valores asignado en la linea 65 */

    console.log("Edad: " + edad);/*Aqui concatenamos una cadena de texto 
    con los valores asignado en la linea 65 */

    var resultado = nombre + " tiene " + edad + " años";/*De este lado creamos
    una variable llamada resultado donde concatenamos lo parametros con una 
    cadena de texto*/

    return resultado; //Retornamos el valor de la variable resultado
}

var mensaje = saludando("@ErikDanielRM", 22); /*Nosotros estamos llamando a la 
funcion desde aqui y le estamos asigando algunos valores a a los parametros 
declarado en la linea 50, en pocas palabras le estamos parsando el nombre y la 
edad para que la funcion pueda trabajar con estos valores

Como tambien podemos observar estamos asigando el calor de la funcion saludando 
a una variable llamada mensaje, de esta forma podemos llamar asigar todo lo que
se encuentra dentro de la funcion a la variable y podemos llamar a "mensaje" desde
cualquier parte del codigo, y esta nos mostrara todo lo que ha ejecutado la
funcion.*/

console.log(mensaje);/*Como "saludando" se a asignado a "mensaje" al llamar a 
mensaje nos mostrara lo que la funcion contiene. */

/*IMPRIME:      Hola: @ErikDanielRM
                Edad: 22
                @ErikDanielRM tiene 22 años     */



/******************* || INICIALIZANDO LOS PARAMETROS || *******************/
console.log("\n|| INICIALIZANDO LOS PARÁMETROS");

/*En el caso de que nuestros parametros no reciban nigun valor nosotros podemos 
inicializarlas, con esto podemos evitar algunas fallas y asi estamos seguros que
si la funcion no recibe determinados valores esta puede no ejecutarse o lanzar 
un determinado mensaje*/

function contar(cantidad=0){/*Aqui inicializamos la variable a 0, esto puede 
    cambiar dependiendo de nuestra necesidades o requerimientos de la aplicacion*/
    console.log("Total: ", cantidad);
}

contar(100);/*Si nosotros no le pasamos ningun valor al parametro este se 
inicializa en 0, pero como vemos aqui le estamos pasando el calor de 100 y este
se le asigna a contar y ahora dentro de la funcion contar, el parametro vale 100
y no 0 */



/******************* || PARAMETROS DE TIPO REST || *******************/
console.log("\n|| PARAMETROS DE TIPO REST");

/*Este tipo de parametros nos permite tener mas de un parametro en la funcion
de esta forma en caso de tener muchos parametros evitamos el declarar uno por uno*/

function cocinar(...paramsTypeRest) {/*Para que sea una funcios de tipo REST debemos
    colocar 3 puntos antes del nombre del parametro (...) esto le indica a la funcion
    que sera un parametro de tipo REST.
    Estos se van a guardar en un Array*/

    console.log("Total ingredients Array: ", paramsTypeRest); /*Aqui mostramos el 
    contenido de la funcion y como vemos nos imprime los parametros en un Array
    
    IMPRIME EN CONSOLA:
            Total ingredients Array:  (7) ['Pollo', 'Pescado', 
                'Bacalao', 'Langosta', 'Pepinillos', 'Salt', 'Carne']           */
}
cocinar("Pollo", "Pescado", "Bacalao", "Langosta", "Pepinillos", "Salt", "Carne");
/*En esta parte es donde podemos meter una infinidad de parametros para poder
sin la necesidad de declararlos en la funcion*/



/******************* || PARAMETROS DE TIPO SPREAD || *******************/
console.log("\n|| PARAMETROS DE TIPO SPREAD");

/*Con este tipo de parametros podemos enviar una cierta cantidad de parametros sin
que estos esten declarados directamente.
Lo interesante es que podemos convinar los paramtros de tipo REST con los de tipo
SPREAD de esta manera podemos tener una funcion que tenga una cantidad "infinita"
de parametros*/

function regalosNavidad(regalo1, regalo2, ...masRegalos){/*Como vemos de este lado 
    estamos llamando a un paramtro de tipo REST*/
    console.log("Primer regalo: ", regalo1);
    console.log("Segundo regalo: ", regalo2);
    console.log("Más regalos: ", masRegalos);

    /*TODO ESTO NOS IMPRIME LOS SIGUIENTE:
        Primer regalo:  MaxSteel
        Segundo regalo:  Barbie
        Más regalos:  (8) ['Carritos Hot Wheels', 'Terrenator', 'Cocinita',
         'Espada', 'Celular', 'Samsumg Tab', 'Laptop MSI', 'Libros']
    */
}

var regalosPrincipales = ["MaxSteel", "Barbie"];

regalosNavidad(...regalosPrincipales/*Es aqui donde declaramos un parametro de tipo
    SPREAD, con los tres puntos cuando nosotros llamamos al metodo y no en los 
    parametros de la funcion, a partir de aqui los demas parametros son de tipo
    REST porque "regalosPrincipales" ocupad los dos primeros parametros declarados
    en la funcion*/, "Carritos Hot Wheels", "Terrenator", "Cocinita", "Espada", 
    "Celular", "Samsumg Tab", "Laptop MSI", "Libros");



/******************* || FUNCIONES ANONIMAS || *******************/
console.log("\n|| FUNCIONES ANÓNIMAS");


// function(){
//     var mensaje = "Hola de nuevo, seguimos aprendiendo JavaScript";
//     console.log(mesaje)
// }
// )()

var saludar = function (nombreAnonimo){/*asignamos la funcion anonima a la variable
    saludar*/

    var mensaje = "Hola de nuevo, seguimos aprendiendo JavaScript " + nombreAnonimo;
    return mensaje;
}
/* Esta es es la manera en la que podemos invocar una funcion anonima, la asignamos
a una variable y a esta le asignamos el valor de la funcion.
En este caso podemos llamarla desde la consola o podemos imprimirla con las siguientes
lineas de codigo:*/
console.log(saludar("Erik"));



/******************* || ENTENDIENDO LOS CALLBACKS || *******************/
console.log("\n|| ENTENDIENDO LOS CALLBACKS");

//Con los callbacks podemos llamar como parámetros a una o varias funciones.
//Los callbacks comúnmente nos ayudan a controlar procesos asíncronos.

function calcular(data1, data2, sumarCB, restarCB, multiplicarCB, dividirCB){
    var suma = data1 + data2;
    var resta = data1 - data2;
    var multiplicacion = data1 * data2;
    var divicion = data1 / data2;

    sumarCB(suma);
    restarCB(resta);
    multiplicarCB(multiplicacion);
    dividirCB(divicion);
}

calcular(5, 7, //Aqui estamos pasando los parametros 
    function(resultado){ //Aqui hacemos la funcion de los CB
        console.log("Suma", resultado);
    },
    function(resultado){
        console.log("Resta", resultado);
    },
    function(resultado){
        console.log("Multiplicación", resultado);
    },
    function(resultado){
        console.log("Divición", resultado);
    })
/*Podriamos decir que llamamos a una funcion anonima que declaramos dentro de los
parametros para este caso y la funcion nos dice que haremos con el callback y los
parametros ingresados.*/

/*IMPRIME EN CONSOLA LO SIGUIENTE:
    Suma 12
    Resta -2
    Multiplicación 35
    Divición 0.7142857142857143
 */



/******************* || FUNCIONES ARROW || *******************/
console.log("\n|| FUNCIONES ARROW");

/*Todas esta son funciones anonimas y cada una la podemos usar de acuerdo a las 
necesidades del proyecto*/

var saludaremos = nombre => "Hola " + nombre;
console.log(saludaremos("Erik Daniel RM"));
/*declaramos la variable saludaremos que recibira un paramentro llamado nombre.
Cuando la funcion se ejecute a la cadena de caracteres "Hola" le concatenaremos la
variable nombre, y nos IMPRIME EN CONSOLA LO SIGUIENTE:
||    Hola Erik Daniel RM   ||*/


var sumar = cantidad => cantidad + 10;
console.log(sumar(10));
/*En esta declaramos la variable sumar que recibe un parametro llamado 
cantidad, depues a cantidad le sumamos 10.
IMPRIME EN CONSOLA LO SIGUIENTE:
||    20    ||*/


var calculando = (datoA, datoB) => datoA + datoB;
console.log(calculando(10, 15));
/*Aqui estamos creando una funcion anonima asignada a la variable calculando, 
esta recibe 2 parametros (datoA, datoB) que despues de suman
IMPRIME EN CONSOLA LO SIGUIENTE:
||    25    ||*/


var suma3Num = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(suma3Num(10, 15));
/*Esta funcion es un poco mas compleja de explicar pues aqui hay una funcion que 
se le mandan dos parametros, estos parametros se suman junto a una 3ra varible 
declarada dentro de la funcion. La funcion retorna la suma y es así como la podemos 
mandar a llamar y mostrar el resultado en consola
IMPRIME EN CONSOLA LO SIGUIENTE:
||    30    ||*/

var validar = () => {
    return "Validación correcta";
}
console.log(validar());
/*Por ultimo tenemos esta funcion que no se le han asignado parametros y que al
ejecutarse retorna una cadena de caracteres
IMPRIME EN CONSOLA LO SIGUIENTE:
||    Validacion correcta    ||*/



/******************* || USO DEL OPERADOR THIS || *******************/
console.log("\n|| USO DEL OPERADOR THIS");

//Este operador es como si se refieriera a algo, como un "Esto".

const boton = document.querySelector('.boton');
//Mandamos a llamar la clase div boton para implementar el addEvenListener.

boton.addEventListener('click', ()=>{ //Implementamos una funcion anonima
    console.log(this);
    this.location = "https://www.google.com/" //nos redirige a Google.com
});