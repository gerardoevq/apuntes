
/*let perro="gordo"
function saludar(mexico) {
    let gato="garfield";
    console.log(mexico+ gato) 
}
saludar("el gato se llama ")
console.log(gato)
*/
//funcion declarada: la puedes ejecutar antes o despues de la declaracion de la funcion, los parametros se pueden llamar como yo quiera
/*suma(5,4,9)
function suma(numero1,numero2,numero3) {
    let resultado=numero1+numero2+numero3
    console.log(resultado)
}
*/
//funcion expresada: la funcion esta dentro de una variable.
/*let funcionExpresada=function (uno,dos) {
    let resultado=uno-dos
    console.log(resultado)
}
funcionExpresada(4,2)*/
//document.write("hola mi nombre es gerardo")
/*function saludar() {
    console.log("uno")
    console.log("dos")
    return 3;
    console.log(4)
}*/
//saludar()
// mostrando el tipo de dato que devuelve la funcion al guardarse dentro de una variable, todo depende si la ejecuto o no
/*function saludar() {
    //console.log("uno")
    //console.log("dos")
    return "gerardo";
}
let ejecucion=saludar;
console.log(typeof ejecucion)*/
/*function saludar() {
    console.log("uno")
    return 2;
    console.log("tres")
    return 4;
}*/
// la computadora solamente ejecuta un return

// funciones anonimas autoejecutables
/*(function(){
    console.log("hola mundo")
})()
*/
// ejecutando una funcion con una funcion anonima autoejecutable
/*function saludar() {
    console.log("uno")
    return (function(){
        console.log("hola mundo")
        return "soy el return de la funcion anonima autoejecutable"
    })()
}
*/
//todas las funciones tienen un return implicito aunque yo no lo escriba
/*function saludar() {
    console.log("hola")
    // si yo no pongo nada cuando la ejecute me va a aparecer un undifined
}*/
// ejecutando una funcion usando template strings
/*let funcionexpresada=function (saludo) {
    console.log(`${saludo}`)
}
funcionexpresada("hola mundo")*/
// LAS FUNCIONES TAMBIEN SON UN TIPO DE DATO 
/*let persona={
    nombre:"gerardo",
    edad:34,
    saludar:function () {
        console.log("hola mi nombre es: ")
        return persona.nombre
    }
}
console.log(persona.saludar())*/
// FUNCION FLECHA 
/*let saludar=()=>{
    console.log("hola mundo")
}
saludar()*/
// funcion flecha resumida
/*let saludar=hi=>console.log(hi)
    
saludar("hola")*/
// resumir una funcion con varios parametros
//let suma=(uno,dos)=>uno+dos
/*let crearObjeto=(nombre,edad)=>{
    return {
        name:nombre,
        age:edad
    }
}*/
//funcion resumida
/*let crearObjeto=(nombre,edad)=>{
    return {
        nombre:nombre,
        edad:edad
    }
}
let crearObjeto=(nombre,edad)=>{
    return {
        nombre,
        edad
    }
}*/
/*let crearObjeto=(nombre,edad)=>{
    return {
        nombre,
        edad,
        imprimir:()=>{
            console.log(`hola mi nombre es ${nombre} y tengo ${edad} años de edad`)
        }
    }
}
console.log(crearObjeto("gerardo",34).imprimir())*/
//funcion anonima clasica
/*(()=>{
    console.log("hola mundo")
})()*/
//funcion anonima crockford
/*((function() {
    console.log("hola mundo")
})())*/
//funcion anonima unaria
/*+function () {
    console.log("hola mundo")
}()*/
// funcion anonima facebook
/*! function () {
    console.log("hola mundo")
}()*/

