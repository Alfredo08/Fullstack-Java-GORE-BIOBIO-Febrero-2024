/*
const nombres = ['Alexander', 'Roger', 'Martha', 'Julieta', 'Alan'];

nombres.forEach(function(nombre, indice){
    console.log(nombre, indice);
    // No tiene valor de retorno
});

const calificaciones = [9.8, 6.7, 8.2, 10.0, 7.9, 9.3, 5.6];

const calificacionesNoAprobatorias = calificaciones.filter(function(calificacion){
    if(calificacion > 10.0){
        return calificacion;
    }
});

console.log(calificacionesNoAprobatorias);
*/

const estudiantes = [{
    nombre: 'Alexander',
    apellido: 'Miller',
    edad: 25,
    id: 12345
},
{
    nombre: 'Martha',
    apellido: 'Gómez',
    edad: 23,
    id: 23242
},
{
    nombre: 'Julieta',
    apellido: 'González',
    edad: 19,
    id: 98765
},
{
    nombre: 'Alan',
    apellido: 'Morales',
    edad: 21,
    id: 77777
}];

const estudianteEncontrado = estudiantes.find(function(estudiante){
    if(estudiante.id === 12121){
        return estudiante;
    }
});

const nombresCompletos = estudiantes.map(function(estudiante){
    let nombreCompleto = `
        <div>
            <h2> ${estudiante.nombre} ${estudiante.apellido}
            <p> Edad: ${estudiante.edad} </p>
            <p> Id: ${estudiante.id} </p>
        </div>
    `
    return nombreCompleto;
});

console.log(nombresCompletos);
console.log(estudiantes);