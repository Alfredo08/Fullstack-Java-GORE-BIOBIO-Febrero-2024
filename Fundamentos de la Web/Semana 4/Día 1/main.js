
class Alumno{
    constructor(nombre, apellido, edad, curso){
        // Asignar atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    calculaPromedio(calificacion1, calificacion2){
        return (calificacion1 + calificacion2) / 2;
    }
}


let alex = new Alumno('Alex', 'Miller', 25, 'Fundamentos de la web');
let martha = new Alumno('Martha', 'Gomez', 21, 'Fullstack Java');
let roger = new Alumno('Roger', 'Anderson', 22, 'Python');

console.log(alex.nombreCompleto());
console.log(martha.nombreCompleto());
console.log(roger.nombreCompleto());

alex.apellido = 'Fernandez';

console.log(alex.calculaPromedio(9.8, 8.3));