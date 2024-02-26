
let nombres = ['Alejandro', 'Martha', 'Julieta', 'Roger', 'Alan'];
             //    0           1          2         3       4
console.log(nombres, nombres.length);

nombres[4] = 'Roberto';

console.log(nombres);

// Agrega el elemento siempre al final del arreglo
nombres.push('Ana');
nombres.push('Rosario');
nombres.push('Alfonso');

console.log(nombres, nombres.length);

// Elimina siempre el último elemento del arreglo
nombres.pop();

console.log(nombres);

// Agrega el elemento siempre al principio del arreglo
nombres.unshift('Vicente');

console.log(nombres);

// Elimina siempre el primer elemento del arreglo
nombres.shift();

console.log(nombres);

// Revisar como funciona .splice()
