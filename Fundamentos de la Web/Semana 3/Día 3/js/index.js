
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
function agregarConexion(elementoImagen){
    let nombre = elementoImagen.parentElement.previousElementSibling.innerText;
    let imagen = elementoImagen.parentElement.previousElementSibling.querySelector('img').src;
    // 2) Eliminar ese usuario del listado de "Request conections"
    elementoImagen.closest(".card-list-item").remove();
    // 3) Actualizar el contador de "Request conections"
    let elementoNumDeConexiones = document.querySelector('#connectionRequestNumber');
    let num = Number(elementoNumDeConexiones.textContent) - 1;
    elementoNumDeConexiones.textContent = num;
    // 4) Agregar el usuario eliminado a nuestra lista de "Your conections"
    let misConexiones = document.querySelector('#myConnections');
    // 5) Actualizar el contador de "Your conections"
    misConexiones.innerHTML += `
        <li class="card-list-item start">
            <img src="${imagen}" alt="arry" class="avatar-s">
            ${nombre}
        </li>`;
    let elementoConexionesTotales = document.querySelector('#totalConnections');
    num = Number(elementoConexionesTotales.innerText) + 1;
    elementoConexionesTotales.innerText = num;
}
