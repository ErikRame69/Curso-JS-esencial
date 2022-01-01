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
    /*ahora estamos asignando a data la funcion mostrar datos, asi de esta manera 
    una vez recibidos todos los datos del API en formato JSON */
});

function mostrarDatos(posts) {
    /*Este es el metodo que buscara de en todos los datos del API */
    
    posts.map((posts, i) => { //con map busca de uno en uno en la API
        let title = document.createElement('h1');
        /*Todo lo que se asigne a title ira a una "platilla" con la etiqueta "h1" */
        let contenido = document.createElement('p');
        /*Todo lo que se asigne a contenido ira a una "platilla" con la etiqueta "p" */

        title.innerHTML= (i+1) + " - " + posts.title;
        /*Aqui estamos asignando a la variable "title" los datos
        en teoria estamos concatenando el parametro "posts" con  los datos llamados
        "title" que se encuentren dentro de la API */

        contenido.innerHTML= posts.completed;
        /*Aqui estamos asignando a la variable "contenido" los datos
        en teoria estamos concatenando el parametro "posts" con  los datos llamados
        "completed" que se encuentren dentro de la API */

        contenedor.appendChild(title);
        contenedor.appendChild(contenido);
        /*Con appendChild estamos mandando estos dos datos, el tile y el contenido
        a la clase contenedor que se encuentra dentro del HTML */

    });
}