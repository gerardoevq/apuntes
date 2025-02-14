/*let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
console.log(persona.hasOwnProperty("prepa"))*/
/*let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
let convertir=Object.entries(persona)
console.log(convertir)*/
/*let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
Object.freeze(persona)
persona.correo="gerardo@gmail.com"
console.log(persona)*/
/*let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
let propiedades=Object.getOwnPropertyNames(persona)
console.log(propiedades)*/
/*let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
let valores=Object.values(persona)
console.log(valores)*/
let persona={
    nombre:"gerardo",
    edad:34,
    redesSociales:["tiktok","instagram","facebook"],
    amigos:{
        universidad:"mada",
        prepa:"miguel",
        secundaria:"jorge"
    }
}
let cliente={
    rfc:"vaqg900724h14",
    curp:"vaqg900724h14"
}
let fusion=Object.assign(persona,cliente)
console.log(fusion)
