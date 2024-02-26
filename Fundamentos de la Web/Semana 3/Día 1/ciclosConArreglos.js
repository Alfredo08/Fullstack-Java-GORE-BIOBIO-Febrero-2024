
let nombres = ['Alejandro', 'Martha', 'Julieta', 'Roger', 'Alan'];

for(let i = 0; i < nombres.length; i ++){
    console.log(nombres[i]);
}
console.log('---Agregando más nombres---');
nombres.push('Ana');
nombres.push('Rosario');
nombres.push('Alfonso');

for(let i = 0; i < nombres.length; i ++){
    console.log(nombres[i]);
}

let calificaciones = [80, 85, 100, 90];
let sumaTotal = 0;

for(let i = 0; i < calificaciones.length; i ++){
    // sumaTotal = sumaTotal + calificaciones[i];
    sumaTotal += calificaciones[i];
}
let promedio = sumaTotal/calificaciones.length;
console.log("Promedio del grupo", promedio);