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