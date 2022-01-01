"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C15 - TRABAJAR CON DATOS REMOTOS O EXTERNOS ************");-

/******************* || OBTENER DATOS CON FETCH || *******************/
console.log("\n|| OBTENER DATOS CON FETCH");

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function(){
    fetch("https://jsonplaceholder.typicode.com/todos")/*Fetch trabaja con base en
    promesas, entonces este quedara esperando hasta que se cumpla.
    Es como si con fetch dijeramos "vamos a traer los datos y..."*/

    .then(data => data.json())
    /*...una vez que los tengas vamos a trabajar con ellos 
    A la varible data le estamos asignando los datos y convirtiendolos en un JSON*/

    .then(data => {
        posts = data;
        mostrarDatos(posts)
    })
});

function mostrarDatos(posts) {
    posts.map((posts, i) => {
        let title = document.createElement('h1');
        let contenido = document.createElement('p');

        title.innerHTML= (i+1) + " - " + posts.title;
        contenido.innerHTML= posts.completed;

        contenedor.appendChild(title);
        contenedor.appendChild(contenido);
    });
}