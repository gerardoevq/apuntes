//console.log("Gerardo")
/*
tipos de datos
- string: es texto
- number: numeros
- array: es un objeto que puede tener muchos espacios de memoria
- funciones: multiples acciones que nosotros programamos
- objetos: es un tipo de dato que puede guardar dato con el nombre de tu propiedad
- boleano: representa un valor logico verdadero o falso, verdadero tiene el valor de 1 y falso tiene el valor de cero
- undefine: representa un valor no definido
- nule: representa la ausencia intencional de cualquier valor
- Nan: not a number, aparece cuando queremos hacer una operacion matematica con datos que no son numeros
-
*/
let nombre="gerardo";
nombre="enrique";
let edad=34;
let boleano=true;
let falso=false;
let caja;
let caja1=undefined;
let caja2=null;
let mascotas=["gordo",20,true,undefined]
mascotas[1]="harry";
let persona={
    nombre: "juanito",
    nacionalidad: "mexicano",
    amigos: ["jorge","miguel","manuel"]
}
//array multidimensional
let amigos=["jorge","miguel","manuel",["francisco","luis","daniela"],
{
    nombre: "carlos",
    apellido: "garcia"
}
]
//console.log(amigos[4].nombre)
//console.log(persona.amigos[2])
//concatenacion
//console.log("hola mi nombre es "+nombre+" y mi edad es "+edad)
//console.log(10%7)
//console.log(edad*2)
persona.correo="correo@gmail.com";
console.log(persona)
persona.nacionalidad="canadiense"
console.log(persona)
delete persona.nombre;
console.log(persona)
console.log({}+{})
//alert("hola mi nombre es gerardo")
var saludar="hola como estas";
console.log(saludar)
var alert="sonora";
//alert("hola hermosillo")
console.log(`hola mi nombre es ${nombre}y mi edad es${edad}`)