"use strict" //Activamos modulo estricto para evitar posibles fallas.

console.log("\n************* C6 - USO DE CONDICIONES O DECISIONES EN JAVASCRIPT ************");-


/******************* || CICLO FOR || *******************/
console.log("\nCICLO FOR");

//Este ciclo nos permite iterar y saber cuantas veces se repetira el ciclo.

var productos= 5;

for (let contador = 0;  contador  <  productos;   contador++){
//  ||   Contador   || Condicion o evaluacion ||     Paso    ||

    /*¿Como funciona esta estructura de control?
    - Para empezar declaramos una variable que en este caso se llama contador 
      (let contador), que precisamente hace referencia a la funcion que hace, esto 
      nos sirve de base para estar haciendo las repeticiones o iteraciones.      
      El contador lo inicializamos en 0 pues este posteriormente se le hace un 
      autoincremento, en la parte que dice "contador++"
      
    - Tambien tenemos la condicion, en la parte "contador < productos" le estamos 
      diciendo a la estructura de control que siempre y cuando contador sea menor 
      que productos, esta sentencia se seguira ejecutando. */

    console.log("Productos #" + contador);
    /*En esta parte mostramos en la consola el resultado de las iteraciones y nos 
    imprime el siguiente resultado:
    CICLO FOR
    Productos #0  ||  El cero nos lo muestra porque inicializamos en 0 el contador
    Productos #1
    Productos #2
    Productos #3
    Productos #4  ||  No nos muestra el 5 por que es debe de ser menor a 5 como lo
                      especifica en los parametros de el FOR*/
    debugger; //Esta opcion nos ayuda a hacer debbuger en el navegador    
}

/******************* || CICLO WHILE || *******************/
console.log("\nCICLO WHILE");

/*En este ciclo a diferencia del FOR, aqui se va a estar ejecutando e iterando 
siempre y cuando se cumpla la condicion que tenemos puesta.*/

var productos= 5;

while(productos > 0){
  console.log("Producto vendido con función While"); //Esto se mostrara en pantalla
  productos--;              //Este es el decremento que lleva a cabo
  debugger;                 //Con el debugger podemos ver los pasos en la consola
}
//La ventaja de trabajar con este ciclo es que primero evalua y despues ejecuta.



/******************* || CICLO DO WHILE || *******************/
console.log("\nCICLO DO WHILE");

/*A diferencia del ciclo While el ciclo Do While se ejecutara por lo menos una vez.*/

productos = 5;

do{ /*PARTE 1:  Primero se ejecutara esta sección, posteriormente en la parte 2
  Se preguntara si se puede seguir con la condicion hasta que esta no se cumpla.*/
  console.log("Producto vendido con función Do While");
  productos--;          //Este es el decremento que lleva a cabo
  debugger;             //Con el debugger podemos ver los pasos en la consola
}while(productos>=1) /*PARTE 2:  En esta parte se pregunta si se puede continuar 
con el ciclo, en caso de que la condicion no se cumpla esta se detendra*/



/******************* || CONTROL DE CICLOS || *******************/
console.log("\nCONTROL DE CICLOS");

//En este caso tenemos dos palabras reservadas "continue" y "break".

//Declaramos la variables
var contador = 0;
var cuenta = 0;

/*Iniciamos el ciclo FOR eneste ciclo vamos a averiguar cuanto numero pares 
hay del 1 al 20 para esto usamos el ciclo FOR*/
for (contador = 0; contador <= 20; contador++) {/*En esta parte declaramos las
  condiciones que queremos que se cumplan, por ejemplo: Contador debe ser mayor a 0
  pero menor a 20, tiene un autouncremento de 1 (++)*/

  if (contador == 15) {//Cuadno el contador llegue a 6 se pondra fin al ciclo FOR

    break; /*Con esta condicion indicamos al ciclo que debe de para si los 
    parametros del if se cumplen*/
  }

  if (contador % 2 == 0) {/*Aqui indicamos que si el residuo de la divicion de 
    contador es igual a 0 entonces puede continuar y sumar +1 a la cuenta*/
    continue;/*Esta es  la sentencia que permite continuar con el ciclo si la 
    condicion if aun se cumple*/
  }
  cuenta++;/*Si elresultado del residuo en la division da igual a 0 entonces 
  cuenta tendra un autoincremento de +1*/
  debugger;
}
console.log("Hay " + cuenta + " numero impares");/*Aqui nos muestra el total de 
los numero impares que hay*/