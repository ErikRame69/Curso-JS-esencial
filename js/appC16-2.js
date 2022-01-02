"use strict" //Activamos el moso estricto para evitar conflictos futuros

console.log("\n************* C16 - PROGRAMACIÓN ORIENTADA A OBJETOS ************");-

/******************* || HARENCIA DE MÉTODOS Y PROPIEDADES || *******************/
console.log("\n|| HARENCIA DE MÉTODOS Y PROPIEDADES");

class Producto {
    constructor(numSerie){
        this.numSerie = numSerie;
        this.tiempoGarantia = 100;
    }
    
    static get infoTienda(){/*Las propiedades estaticas hacen que el metodo info 
        tienda este disponible aunque nosotros no hagamos una instancia, no fue
        necesario hacer una instacia de ese objeto para que nosotros lo usemos*/
        console.log("Productos de la tienda Patitos Inc");
    }

    set setGarantia(value) {
        this.tiempoGarantia -= value;
    }
    get getGarantia() {
        return this.garantia;
    }

}


/******************* || OBJETOS: SUS MÉTODOS Y SUS PROPIEDADES || *******************/
console.log("\n|| OBJETOS: SUS MÉTODOS Y SUS PROPIEDADES");

class Pantalla2 extends Producto { /*Aqui nosotros estamos creando la clase pantalla */
    constructor(numSerie, marca, modelo, puldadas){ /*Todas las clases que creemos necesitan un constructor
        El constructor defina como se va a presentar a nuestro entorno de 
        desarrollo, aqui estamos indicando los atributos*/
        super(numSerie);/*Tenemos que indicarle a la clase hija de donde vendran los
        atributos, en este caso usamos la palabra reservada "super" y le pasamos el 
        valo con el que iniciamos el constructor.*/
        
        this.marca = marca;
        this.modelo = modelo;
        this.puldadas = puldadas;
    }

    /*Ahora que ya hemos creado las propiedades tenemos que crear lo metodos.
    En este caso dentro de la clase los metodos no requieren la palabra function
    para poder inicializar los metodos*/

    encendido(){
        this.garantia = 1;
        console.log(`La pantalla ${this.marca} se ha encendido.`);
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

const tvSala2 = new Pantalla2("C2458G", "Gran cinema", "Sony", 120); 
//Esto es la instancia de una clase

const tvHabitacion2 = new Pantalla2("X565FD", "3DX Max", "Sharp", 150);
//Esto es la instancia de una clase

