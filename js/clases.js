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
/*
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
    sonido(){ // esto es un metodo, es una funcion que esta dentro de una clase
        console.log(`soy un perro y mi sonido es un ladrido`)
    }

}
const betoben = new Perro("gordo","macho","mediano"); // esto se llama instanciar(crear un objeto utilizando una clase)
console.log(betoben.nombre)
betoben.sonido()
betoben.saludar()*/

class Animal {
    constructor(nombre,genero) {
        this.nombre=nombre;
        this.genero=genero;
    }
    sonar(){
        console.log("hago sonidos")
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
    sonar(){// aqui estoy sobreescribiendo el metodo de la clase Animal
        console.log("hola mundo")
    }
    static hermosillo(Perro){//los metodos estatico necesitan llevar la palabra static y no es necesario utilizar una instancia(new) parautilizarlos
        console.log(`me llamo ${Perro.nombre}`)
    }
}
const gordo = new Perro("gordo","macho","mediano");
gordo.sonar()
Perro.hermosillo(gordo)