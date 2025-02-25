
/*let segundonumero=5
function sumar(primernumero) {
    let segundonumero=15;
    console.log(primernumero+segundonumero) 
}
sumar(10)
console.log()*/

//suma(5,4,9)
/*function suma(numero1,numero2,numero3) {
    let resultado=numero1+numero2+numero3
    return resultado
}

multiplicacion(5,suma(5,4,9))
function multiplicacion(numero1,numero2) {
    let resultado=numero1*numero2
        console.log(resultado)
}*/
//ejercicio de operacion sincrona
/*function texto() {
    console.log("soy un callback")
}
function operacion(params) {
    params()
}
operacion(texto)*/

/*function fun1(callback) {
    console.log("inicio")
    callback()

    console.log("fin")
}
function fun2() {
    console.log("proceso intermedio")
}
fun1(fun2)*/
/*function comprar(art1,art2,callback) {
    let mensaje=art1+art2
    callback(mensaje)
}
function imprimir(mensaje) {
    console.log(`el monto gastado es de ${mensaje}`)
}
comprar(100,200,imprimir)*/
/*function firstAction(callback) {
    console.log("I'm the first action")
    setTimeout(callback,5000)

  }
  function secondAction() {
    console.log("I'm the second action")
  }
  setTimeout(()=>{
    firstAction(secondAction)
    },3000);*/
/*function primero() {
    console.log("primero")
}
function segundo() {
    console.log("SEGUNDO")
}
primero()
segundo()*/
//este es el problema con la asincronia(retraso de envio de informacion)
/*function primero() {
    setTimeout(() => {
        console.log("primero") 
    }, 3000);
}
function segundo() {
    console.log("SEGUNDO")
}
primero()
segundo()*/
// asi soluciono el problema de la asincronia(usando callbacks)
/*function primero(segundo) {
    setTimeout(() => {
        console.log("primero") 
        segundo()
    }, 3000);
}
function segundo() {
    console.log("SEGUNDO")
}
primero(segundo)*/
/*function suma(uno,dos) {
    console.log(uno+dos())
}
function resta() {
    return 5-4
}
suma(5,resta)*/
/*
function inicio(uno,dos) {
    dos(uno)    
}
inicio("gerardo",function (uno) {
    console.log(`bienvenido ${uno}`)
})*/
function suma(articulo1,artuculo2,suma) {
    let suma=articulo1+artuculo2
}
suma(5,10,()=>{
    console.log(`el total es ${suma}`)
})