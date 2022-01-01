"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C14 - CONOCIENDO EL DOM Y EL BOM ************");-

/******************* || ENTENDER EL DOM Y EL BOM || *******************/
console.log("\n|| ENTENDER EL DOM Y EL BOM");

var boton = document.getElementById("boton");
/*Mandamos a llamar al "objeto"/id boton del docuemto HTML y se lo asignamos a la 
variable boton, que es diferente al ID que estamos llamando*/

boton.addEventListener('click', function(){
    window.location.href = "https://github.com/ErikRame69";
});
//Aqui estamos escuchando cuando haga click y nos manda a mi perfil de GitHub