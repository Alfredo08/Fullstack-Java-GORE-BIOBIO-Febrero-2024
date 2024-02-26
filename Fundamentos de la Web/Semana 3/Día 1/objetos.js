
let libro = {
    titulo: "El principito",
    autor: "Antoine de Saint",
    numPaginas: 450,
    capitulos: 19,
    edicion: 3,
    idiomas: ['Español', 'Francés', 'Inglés']
};

console.log(libro);
console.log(libro.autor);
console.log(libro['autor']);

let propiedad = 'idiomas';
console.log(libro[propiedad]);
console.log(libro.propiedad);

libro.prologo = true;
console.log(libro);
delete libro.edicion;
console.log(libro);

for(let i = 0; i < libro.idiomas.length; i ++){
    console.log(libro.idiomas[i]);
}

let estudiante = {
    nombre: 'Alejandro',
    apellido: 'Gonzalez',
    pasatiempos: {
        nadar: {
            frecuencia: "5 veces a la semana"
        },
        tenis: {
            frecuencia: "2 veces a la semana"
        }
    },
    nombreCompleto: function(){
        console.log(estudiante.nombre, estudiante.apellido);
    }
}

estudiante.pasatiempos.tenis.frecuencia = "2 veces al mes";

estudiante.nombreCompleto();
