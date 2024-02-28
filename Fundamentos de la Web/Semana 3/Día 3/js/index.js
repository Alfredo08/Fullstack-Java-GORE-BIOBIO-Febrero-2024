
function clickEnImagen(elementoImagen){
    console.log("Le diste click a la imagen", elementoImagen);
}

function logout(elementoBotonLogout){
    alert("Estas a punto de hacer logout!");
}

function cambiarFondo(encabezadoElemento){
    encabezadoElemento.classList.add("extra");
}

function quitarFondo(encabezadoElemento){
    encabezadoElemento.classList.remove("extra");
}

function eliminaConexion(elementoImagen){
    // elementoImagen.parentElement.parentElement.remove();
    elementoImagen.closest(".card-list-item").remove();
    let elementoNumDeConexiones = document.querySelector('#connectionRequestNumber');
    let num = Number(elementoNumDeConexiones.textContent) - 1;
    elementoNumDeConexiones.textContent = num;
}

function buscarConexion(botonFind){
    let inputBusqueda = document.querySelector('#busqueda');
    alert("Quieres buscar: " + inputBusqueda.value);
}

function seleccionarCiudad(elementoSelector){
    console.log(elementoSelector.value);
}

/* Pasos para agregar una conexion */
// 1) Darle click a la imagen de la palomita
// 2) Eliminar ese usuario del listado de "Request conections"
// 3) Actualizar el contador de "Request conections"
// 4) Agregar ese usuario a el listado de "Your conections"
// 5) Actualizar el contador de "Your conections"