"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C15 - TRABAJO CON DATOS REMOTOS O EXTERNOS ************");-

/******************* || TRABAJAR CON PROMESAS EN JAVASCRIPT || *******************/
console.log("\n|| TRABAJAR CON PROMESAS EN JAVASCRIPT");

var boton = document.getElementById("boton");
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        });
});

function getPosts() {
    return fetch ('https://jsonplaceholder.typicode.com/todos');
}

function getCountries() {
    return fetch ('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
    /*Esta funcion no sirve debido a que la API ya no esta disponible, pero, lo
    que hace es crear un elemento y mandarlo al la clase llamada "banderas" que se 
    enncuentra dentro del documento HTML */
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.completed;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}