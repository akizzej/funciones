/* creamos la funcion add */
const add =function (numero1,numero2){
    let Numero1 = numero1;
    let Numero2 = numero2;
    
   return Numero1 + Numero2

};
/* realizo document.write para verificar funcion add en pantalla */
/*document.write(add(1,5));*/


/* creamos la funcion multiply */
const multiply =function (numero1,numero2){
    let Numero1 = numero1;
    let Numero2 = numero2;
    
   return Numero1 * Numero2

};
/* realizo document.write para verificar funcion multiply en pantalla */
/*document.write(multiply(2,5));*/

/*procedo a resolver 36325 * (9824 + 777) hago document.write para imprimir resultado en web*/

document.write (multiply(36325,(add(9824,777))));

/*adicional creo formula para realizar operacion solicitada de una vez*/

const result = function(numero1, numero2, numero3){
    let Numero1= numero1;
    let Numero2= numero2;
    let Numero3= numero3;
    return Numero1*(Numero2 + Numero3)
    };
   
/*document.write (result(36325,9824,777));*/
console.log (result(36325,9824,777));







