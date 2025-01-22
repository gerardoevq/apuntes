/*let presidente="obama"
if (presidente==="trump") {
console.log("trump es el presidente electo")
} else {
console.log("te equivocaste de presidente")
}
let edad=18;
if (edad>=18) {
    console.log("eres mayor de edad, puedes pasar")
} else {
    console.log("eres menor de edad")
}
let color="gris";
if (color==="red") {
    console.log("el color es rojo")
} else if (color==="blue"){
    console.log("el color es azul")
} else {
    console.log("color no registrado")
}*/
//console.log(8>=8)
/*
= asignacion
== compara valor pero no compara tipo de dato
=== compara valor y tipo de dato
>= el dato debe de ser igual o mayor
<= el dato debe de ser menor o igual
&& significa Y eso quiere decir que se deben cumplir OBLIGATORIAMENTE dos condiciones o mas
|| significa O eso quiere decir que se debe de cumplir AL MENOS una condicion
!== significa que debe ser diferente
*/
//console.log(1 === "1")
let numero=25;
//console.log(1+true)
/*if (numero>5 || numero<3) {
    console.log("es verdadero")
} else{
    console.log("no es verdadero y el numero es 4")
}*/
/*if (numero>10 && numero<20) {
    console.log("se cumplieron ambas condiciones")
} else {
    console.log("no se cumplio alguna condicion") 
}*/
/*if (numero===1) {
    console.log("es lunes")
} else if (numero===2){
    console.log("es martes")
} else {
console.log("es un dia entre miercoles y domingo")
}*/

if (numero>=5 && numero<=11) {
    console.log("buenos dias")
} else if (numero>=12 && numero<=18) {
    console.log("buenas tardes")
} else if (numero<=4 || numero>=19 && numero<25) {
    console.log("buenas noches")
} else {
    console.log("Dato no valido")
}