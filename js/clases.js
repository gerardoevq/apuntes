/*let persona={
    nombre:"gerardo",
    Edad:34
}

class Animal {
    constructor(nombre,genero) {
        this.nombre=nombre;
        this.genero=genero;//esto es una propiedad
    }
    saludar(){
        console.log(`hola me llamo${this.nombre}`)
    }
}
const perro = new Animal("gordo","macho");//cuando uso la palabra NEW la clase se vuelve un OBJETO
const gato = new Animal("harry","macho");
const perico = new Animal();
const tortuga = new Animal();
const pez = new Animal();


console.log(perro)
console.log(gato)
console.log(perico)
console.log(tortuga)
console.log(pez)


console.log(persona)
console.log(perro.genero)
perro.saludar()
gato.saludar()*/

class Animal {
    constructor(nombre,genero) {
        this.nombre=nombre;
        this.genero=genero; //esto es una propiedad
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre,genero,tamano) {
        super(nombre,genero);
        this.tamano=tamano;
    }
    sonido(){
        console.log(`soy un perro y mi sonido es un ladrido`)
    }

}
const betoben = new Perro("gordo","macho","mediano");
console.log(betoben.nombre)
betoben.sonido()
betoben.saludar()