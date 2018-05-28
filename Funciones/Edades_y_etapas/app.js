/* se crea una web que pida, por medio de un prompt la edad de una persona en años*/
/* se declara la const age = al prompt para guardar la data */
const age = parseFloat(prompt("¿Cuál es tu edad?"));
/** utilizo parseFloat para transformar la data ingresada en prompt en un number decimal */


if (age>21){
alert("Wow eres todo un adulto!!");
}
else if (age >18 && age <=21) {
alert("Eres un joven aún!!");      
} 
else if (age >12 && age <=18) {
alert("Eres un adolescente!!");     
}
else if(age >5 && age <=12)
{
alert("Eres un niño aún!!"); 
}
else if(age >3 && age <=5)
{
alert("Eres un pequeñin!!"); 
}
else if(age >=1 && age <=3) {
alert("Eres un bebe!!");    
}
/** hasta acá cada vez que se ingresa un numero en el prompt, devuelve un mensaje según la condicion */
else if(age <1){
alert("ERROR!!");   
}
/** age< 1 para que arroje mensaje de error */
else if(age != "string"){
    alert("ERROR!!");   
    }
/* age distinto de "string para que arroje error cada vez que no se ingrese un numero en el prompt*/    
