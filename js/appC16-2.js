"use strict" //Activamos el moso estricto para evitar conflictos futuros

console.log("\n************* C16 - PROGRAMACIÓN ORIENTADA A OBJETOS ************");-

/******************* || OBJETOS: SUS MÉTODOS Y SUS PROPIEDADES || *******************/
console.log("\n|| OBJETOS: SUS MÉTODOS Y SUS PROPIEDADES");

class Pantalla2 { /*Aqui nosotros estamos creando la clase pantalla */
    constructor(marca, modelo, puldadas){ /*Todas las clases que creemos necesitan un constructor
        El constructor defina como se va a presentar a nuestro entorno de 
        desarrollo, aqui estamos indicando los atributos*/
        this.marca = marca;
        this.modelo = modelo;
        this.puldadas = puldadas;
    }

    /*Ahora que ya hemos creado las propiedades tenemos que crear lo metodos.
    En este caso dentro de la clase los metodos no requieren la palabra function
    para poder inicializar los metodos*/

    encendido(){
        console.log(`La pantalla ${this.marca} se ha encendido`);
    }

    volumen(){
        console.log('El volumen se ha modificado');
    }

    info(){
        console.log(`La pantalla ${this.marca}, modelo ${this.modelo} es de ${this.puldadas} pulgadas`);
    }

    /*Podriamos decir que esto es la plantilla que todas las demas instancias 
    pueden usar (siempre y cuando lo se adapte a las necesidades) para evitar el 
    tener que estar escribiendo lo mismo una y otra vez. Esto se le conoce como
    HERENCIA*/

    
    set peso(value){
        this.kgs = value.trim();
    } /*con set estamos definiendo una funcion que recibira undato y despues
    la asignaremos como valor*/

    get peso(){
        return this.kgs;
    } /*Con get podemos obtener la informacion y con el return refresarlo */
}

const tvSala2 = new Pantalla2("Gran cinema", "Sony", 120); 
//Esto es la instancia de una clase

const tvHabitacion2 = new Pantalla2("3DX Max", "Sharp", 150);
//Esto es la instancia de una clase




