"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C17 - SOLUCION Y MANEJO DE ERRORES EN JAVASCRIPT ************");-

/******************* || MANEJO DE ERRORES EN JAVASCRIPT || *******************/
console.log("\n|| MANEJO DE ERRORES EN JAVASCRIPT");

try{
    /*Todo lo que se encuentre en esta seccion del codigo es lo que se va a probar
    o testear, esto nos ayuda a evitar fallas y en caso de haber un error con el
    metodo catch... */

    //var array = new Array(10000000000000000000000000000000);

    var x = y;

}catch(error){
    /*Con el metodo catch podemos atrapar ese error y manejarlo de determinada
    forma si es necesario */

    console.log(error);
    console.log(error.message);
    console.log(error.name);

}/*De esta forma podemos saber que tipo de error tenemos e incluso podemos observar
un mensaje que nos describe el error*/