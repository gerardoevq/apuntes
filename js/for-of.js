let paises=["mexico","USA","argentina","colombia"]
    for (let pais of paises) {
        console.log(pais)
    }
//forof te recorre el array separando los objetos por renglon
//forin te recorre el array separando los objetos por renglon y agrega la posicion de cada dato
    for (const key in paises) {
        console.log("indice",key,"valor",paises[key])
    }