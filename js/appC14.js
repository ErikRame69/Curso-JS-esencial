"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C14 - CONOCIENDO EL DOM Y EL BOM ************");-

/******************* || ENTENDER EL DOM Y EL BOM || *******************/
console.log("\n|| ENTENDER EL DOM Y EL BOM");

var boton = document.getElementById("boton");
/*Mandamos a llamar al "objeto"/id boton del docuemto HTML y se lo asignamos a la 
variable boton, que es diferente al ID que estamos llamando*/

// boton.addEventListener('click', function(){
    // alert("Te redireccionaresmos a mi GitHUb")
    // window.location.href = "https://github.com/ErikRame69";
// });Comentado para poder añadir trabajar con el siguiente tema

//Aqui estamos escuchando cuando haga click y nos manda a mi perfil de GitHub



/******************* || PROPIEDADES Y METODOS DEL DOM || *******************/
console.log("\n|| PROPIEDADES Y MÉTODOS DEL DOM");

var todosLosParrafos = document.getElementsByTagName('p');/*El metodo
getElementsByTagName nos permite traer objetos de acuerdo a las etiqueta */

var parrafosPorClase = document.getElementsByClassName('principal')[0].textContent;

//boton.addEventListener('click', function(){
    // alert("Te redireccionaresmos a mi GitHUb")
    // window.location.href = "https://github.com/ErikRame69";
    console.log(todosLosParrafos);
    console.log(parrafosPorClase);
//}); Comentado para poder trabajar con el tema siguiente

var foto = document.createElement('img');
foto.src= '../media/Fondo 1.jpg';
foto.name = 'Video 1';
foto.width = 400;
document.body.appendChild(foto);

foto.addEventListener('click', function () {
    alert("Pulsaste sobre la imagen.")
});



/******************* || PROPIEDADES Y METODOS DEL BOM || *******************/
console.log("\n|| PROPIEDADES Y MÉTODOS DEL BOM");

// console.log("innerHeight: ". window.width);
// console.log("innerWidth: ". window.innerWidth);

localStorage.setItem('contenido', 'Ars Longa, Vita Brevis');

boton.addEventListener('click', function(){
    var contenidoLS = localStorage.getItem('contenido');
    //document.getElementsByClassName("principal").innerHTML = "contenidoLS";
    //document.getElementById("remplazo").innerHTML = contenidoLS;  
    document.getElementsByClassName("principal")[1].innerHTML=contenidoLS;
    /*En este ejemplo estamos asignanso el la clase que se encuentra dentro del
    HTML con contenido, es importante indicar */
});