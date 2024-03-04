
let nombre = "Alex";
let apellido = "Miller";

// let nombreCompleto = "Hola mi nombre es" + nombre + " " + apellido;
let nombreCompleto = `Hola mi nombre es ${nombre} ${apellido}`;

console.log(nombreCompleto);

let tarjetaUsuario = `<div>
                        <h2> Hola mi nombre es ${nombre} ${apellido} </h2>
                        <img src="./usuario.png" alt="Imagen de usuario">
                        <h3> Biografía </h3>
                        <p> La biografía... </p>
                      </div>`;

let tarjetaUsuario2 = '<div>' +
                        '<h2> Hola mi nombre es' + nombre + ' ' + apellido + '</h2>' +
                        '<img src="./usuario.png" alt="Imagen de usuario">' + 
                        '<h3> Biografía </h3>' +
                        '<p> La biografía... </p>' +
                      '</div>';
                      