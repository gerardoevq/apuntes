
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
/*function suma(articulo1,artuculo2,suma) {
    let suma=articulo1+artuculo2
}
suma(5,10,()=>{
    console.log(`el total es ${suma}`)
})*/
/*
function firstaction(secondaction) {
    setTimeout(() => {
        console.log("soy la primer accion") 
        secondaction()
    }, 5000);
    
}
function secondaction(params) {
    setTimeout(() => {
        console.log("soy la segunda accion") 
    }, 2000);    
}
firstaction(secondaction)*/
/* es el mismo ejercicio de la linea 110
function firstaction(callback) {
    console.log("soy la primera accion")
    callback("soy la segunda accion")
}
function secondaction(data) {
    setTimeout(() => {
        console.log(data)
    }, 2000);
}
setTimeout(() => firstaction(secondaction), 5000);*/

/*function firstAction(callback,message) {
    console.log(message)
    callback()
}
function secondaction(message) {
    console.log(message)
}
/*setTimeout(() => {
    firstAction( () => secondaction("im the second action"),"im the first action" )
}, 5000);*/
//setTimeout(() => firstAction( () => secondaction("im the second action"),"im the first action" ), 5000);
//setTimeout(firstAction(secondaction("texto 2"),"texto 1"), 5000);
/*function primero(gordo) {
    setTimeout(() => {
        console.log("primero")
        gordo()
    }, 3000);
}
function segundo() {
    console.log("segundo")
}
primero(segundo)
//segundo()*/
/*console.time("prueba")
setTimeout(() => {
    console.timeEnd("prueba")
}, 3000);*/
/*function suma(a,b) {
    console.log(a+b())
}
function resta() {
    return 2-3
}
suma(3,resta)*/
/*function inicio(valor,callback) {
    callback(valor)
}
inicio("fulanito",function (params) {
    console.log(`bienvenido ${params}`)
})*/
/*function suma(a,b,callback) {
    callback(a+b)
}
suma(3,5,function (params) {
    console.log(`el resultado es ${params}`)
})*/
/*function firstaction(callback) {
    console.log("soy la primer accion")
    callback("soy la segunda accion")
}
function secondaction(data) {
    setTimeout(() => {
        console.log(data)
    }, 2000);
}
setTimeout(() => {
    firstaction(secondaction)
}, 3000);*/
/*function first_action(callback,message) {
    console.log(message)
    callback()
}
function secondAction(message) {
    console.log(message)
}*/
// manera 1 de ejecutar una funcion
// setTimeout(() => first_action(()=>secondAction("soy el segundo sato"),"soy el primer dato"), 5000);

//manera 2 de ejecutar el ejercicio
/*setTimeout(() => {
    first_action(()=>{
        secondAction("soy el segundo dato")
    },"soy el primer dato")
}, 3000);*/

//manera 3 de ejecutar el ejercicio
/*setTimeout(() => {
    first_action(()=>secondAction("soy el segundo dato"),"soy el primer dato")
}, 3000);*/
//setTimeout(()=>first_action(()=>secondAction("texto 2"),"texto1") ,4000)
//1 funcion con 3 parametros, 2 son callbacks y uno es un mensaje de texto y para ejecutar los callbacks se ejecutan con settimeout
/*function firstAction(callbackuno,callbackdos,tres) {
    console.log("soy la primera accion")
    callbackuno("soy la segunda accion")
    callbackdos("soy la tercera accion")
}
function secondAction(params) {
    setTimeout(() => {
        console.log(params)
    }, 3000);
}
function thirdAction(data) {
    setTimeout(() => {
        console.log(data)
    }, 3000);
}

setTimeout(() => {
    firstAction(secondAction,thirdAction,"texto")
}, 3000);*/
/*function firstAction(callback,message,anotherCallback) {
    console.log(message)
    callback()
    setTimeout(() => {
        anotherCallback()
    }, 3000);
}
function secondAction(message) {
    console.log(message)
}
function thirdAction(message) {
    console.log(message)
}
setTimeout(() => {
    firstAction(()=>{
        secondAction("segunda accion")
    },"primera accion",()=>{
        thirdAction("tercera accion")
    })
}, 3000);*/
/*function operacion(a,b,callback) {
    return callback(a,b)
}
console.log(operacion(5,7,(a,b)=>a*b))*/
/*const animales=["perro","gato","pajaro"]
function modificar(array,callback) {
    animales.push("tortuga")
    setTimeout(() => {
        callback(array)
    }, 3000);
}
modificar(animales,(params)=>{
    console.log(`e modificado el array y ahora es de ${params.length}`)
})
console.log(animales)*/
// este es un ejemplo de un callback hell
/*function firstAction(callback) {
    setTimeout(() => {
        console.log("primera accion")
        callback()
    }, 1000);
}
function secondAction(callback) {
    setTimeout(() => {
        console.log("segunda accion")
        callback()
    }, 1000);
}
function thirdAction(callback) {
    setTimeout(() => {
        console.log("tercera accion")
        callback()
    }, 1000);
}
firstAction(()=>{
    secondAction(()=>{
        thirdAction(()=>{
            console.log("todas las operaciones an sido completadas")
        })
    })
})*/