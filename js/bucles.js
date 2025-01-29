/*for (let index = 5; index <=10; index++) {
    console.log(index)
}
let x=0;
while (x<=10) {
    console.log(x)
    x++;
}
for (let index = 10; index>0; index--) {
    console.log(index)
}
let x=0;
do {
    console.log(x);
    x++;
} while (x>17);
for (let index = 1; index<=10; index++) {    
    if (index===5) {
        break;
    }
    console.log(index)
}
for (let index = 1; index<=10; index++) {
if (index===5){
    continue;
}  
   console.log(index)
    
}
let paises=["mexico", "USA", "china", "Argentina", "colombia"]
for (let index = 0; index < 5; index++) {
   console.log(paises[index])
}*/
/* bucle anidado
for (let index = 0; index < 3; index++) {
  let a=index + ".";
  for (let indice = 0; indice < 10; indice++) {
        console.log(a+indice)
  }
    
}*/
/*let alumno = [
    [10, 8, 5, 6, 9],
    [10, 7, 8, 6, 9],
    [10, 4, 5, 6, 9],
    [10, 9, 5, 6, 9],
    [10, 8, 5, 7, 9]
];*/

/*for (let index = 0; index < alumno.length; index++) {
    for (let indice = 0; indice < alumno[index].length; indice++) {
        console.log(alumno[index][indice]);
    }
}*/
/*let sumarCalificaciones=0
let materias=0
for (let index = 0; index < alumno.length; index++) {
    for (let indice = 0; indice < alumno.length; indice++) {
        sumarCalificaciones += alumno[index][indice]
        materias++
    }
        
    }
    console.log(sumarCalificaciones)*/
    /*let sumarCalificaciones=0
let materias=0
for (let index = 0; index < alumno.length; index++) {
    for (let indice = 0; indice < alumno.length; indice++) {
        sumarCalificaciones += alumno[index][indice]
        materias++

    }
        
    }
    console.log(sumarCalificaciones/materias)*/
   /* for (let index = 0; index < alumno.length; index++) {
        for (let indice = 0; indice < alumno[index].length; indice++) {
            if (alumno[index][indice]>=6) {
                console.log("Sacaste "+alumno[index][indice]+" aprobado")
            }
            else{
                console.log("sacaste "+alumno[index][indice]+" reprobado")
            }
        
            //console.log(alumno[index][indice]);
        }
    }*/
  /* let materiasReprobadas=0
   for (let index = 0; index < alumno.length; index++) {
        for (let indice = 0; indice < alumno.length; indice++) {
            if (alumno[index][indice]<=5) {
                materiasReprobadas++
            } 
            
        }
    
   }
   console.log(materiasReprobadas)*/
   /*let autos= [
    {modelo:"mustang",año:1962},
    {modelo:"mustang",año:1980},
    {modelo:"corvette",año:1981}
   ]
   for (let index = 0; index < autos.length; index++) {
    //console.log(autos[index].modelo+" del año "+autos[index].año)
    console.log(`${autos[index].modelo} del año ${autos[index].año}`)
   }
   */
    let persona={
        nombre:"gerardo",
        apellido:"valdez",
        edad:34
    }
    for (const key in persona) {
        console.log(`propiedad: ${key} valor: ${persona[key]}`)
    }